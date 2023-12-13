import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import multer from 'multer'
import helmet from 'helmet'
import path from 'path'
import { fileURLToPath } from 'url'
import { register } from './controllers/auth.js'
import authRoutes from './routes/auth.js'
import userRoutes from './routes/users.js'
import { updateUserImage } from './controllers/users.js'
import { loginValidation, registerValidation } from './validations/validations.js'
import handleValidationErrors from './middleware/handleValidationErrors.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config()
const app = express()
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }))
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors({ credentials: true, origin: 'http: process.env.CLIENT }))

app.use('/assets', express.static(path.join(__dirname, 'public/assets')))


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/assets')
  },
  filename: function (req, file, cb) {
    function getRandomInt(min, max) {
      min = Math.ceil(min)
      max = Math.floor(max)
      return Math.random() * (max - min) + min
    }
    cb(null, getRandomInt(0, 100) + file.originalname)
  }
})

const upload = multer({ storage })

/* ROUTES WITH FILES */
app.post(
  '/auth/register',
  upload.fields([
    {
      name: 'picture',
      maxCount: 1
    }
  ]),
  registerValidation,
  handleValidationErrors,
  register
)

app.patch(
  '/users/:id',
  upload.fields([
    {
      name: 'picture',
      maxCount: 1
    }
  ]),
  updateUserImage
)

/* ROUTES */
app.use('/auth', loginValidation, handleValidationErrors, authRoutes)
app.use('/users', userRoutes)

const PORT = process.env.PORT || 6001
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`))
  })
  .catch(error => console.log(`${error} did not connect`))
