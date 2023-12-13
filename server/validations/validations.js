import { body } from 'express-validator'

export const registerValidation = [
  body('email', 'Invalid Email').isEmail(),
  body('password', 'Invalid password, minimum 5 char').isLength({ min: 5 }),
  body('firstName', 'Invalid name, minimum 2 char').isLength({ min: 2 })
]

export const loginValidation = [
  body('email', 'Invalid Email').isEmail(),
  body('password', 'Invalid credentials.').isLength({ min: 5 })
]

