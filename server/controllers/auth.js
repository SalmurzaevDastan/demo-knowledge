import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../models/User.js'

/* REGISTER USER */
export const register = async (req, res) => {
  try {
    const { firstName, email, password, male, birthDay } = req.body
    const avatar = await req.files.picture[0].filename
    const salt = await bcrypt.genSalt(5)
    const passwordHash = await bcrypt.hash(password, salt)
    const newUser = new User({
      firstName,
      email,
      password: passwordHash,
      birthDay,
      male,
      picturePath: avatar
    })
    const userDb = await newUser.save()

    const token = jwt.sign({ id: userDb._id }, process.env.JWT_SECRET)
    const user = { _id: userDb._id, firstName: userDb.firstName, picturePath: userDb.picturePath }
    res.status(200).json({ token, user })
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: err.message })
    throw err
  }
}

/* LOGGING IN */
export const login = async (req, res) => {
  try {
    const { email, password } = req.body
    const userDb = await User.findOne({ email: email })
    if (!userDb) return res.status(404).json({ msg: 'User does not exist.' })

    const isMatch = await bcrypt.compare(password, userDb.password)
    if (!isMatch) return res.status(404).json({ msg: 'Invalid credentials.' })

    const token = jwt.sign({ id: userDb._id }, process.env.JWT_SECRET)

    delete userDb.password

    const user = { _id: userDb._id, firstName: userDb.firstName, picturePath: userDb.picturePath }
    res.status(200).json({ token, user })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
