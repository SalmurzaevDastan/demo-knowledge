import User from '../models/User.js'
import fs from 'fs/promises'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


export const getUsers = async (req, res) => {
  try {

    const token = req.header('Authorization')
    const { id } = jwt.verify(token.slice(7, token.length).trimLeft(), process.env.JWT_SECRET)

    const data = await User.find({ _id: { $ne: id} })
    const users = []

    data.forEach(item => {
      users.push({
        _id: item._id,
        firstName: item.firstName,
        birthDay: item.birthDay,
        picturePath: item.picturePath
      })
    })

    res.status(200).json(users)
  } catch (err) {
    res.status(404).json({ msg: err.message })
    throw err
  }
}

/* UPDATE */

export const updateUserImage = async (req, res) => {
  try {
    const { id } = req.params
    const image = await req.files.picture[0].filename
    const userDb = await User.findById(id)
    if (image) {
      await fs.unlink('public/assets/' + userDb.picturePath, function (err) {
        if (err && err.code == 'ENOENT') {
          console.info("File doesn't exist, won't remove it.")
        } else if (err) {
          console.error('Error occurred while trying to remove file')
        } else {
          console.info(`removed`)
        }
      })
      await User.findByIdAndUpdate(id, { picturePath: image })
      return res.status(200).json({ data: image, key: 'picturePath' })
    }
    return res.status(200)
  } catch (err) {
    res.status(404).json({ msg: err.message })
    throw err
  }
}

export const updateNameOrPassword = async (req, res) => {
  try {
    const { id } = req.params
    const { key, data } = req.body

    if (key === 'password') {
      const salt = await bcrypt.genSalt(5)
      const passwordHash = await bcrypt.hash(data, salt)
      await User.findByIdAndUpdate(id, { password: passwordHash })
      return res.status(200).json({ msg: true })
    }
    await User.findByIdAndUpdate(id, { firstName: data })

    return res.status(200).json({ data, key })
  } catch (err) {
    res.status(404).json({ msg: err.message })
    throw err
  }
}

export const verifyPassword = async (req, res) => {
  try {
    const token = req.header('Authorization')
    const { id } = jwt.verify(token.slice(7, token.length).trimLeft(), process.env.JWT_SECRET)
    const { password } = req.body
    const user = await User.findById(id)
    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) return res.status(400).json({ msg: 'Invalid password.' })
    return res.status(200).json({ msg: true })
  } catch (err) {
    res.status(404).json({ msg: err.message })
    throw err
  }
}
