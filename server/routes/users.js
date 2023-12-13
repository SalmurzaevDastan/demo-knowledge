import express from 'express'
import { getUsers, updateNameOrPassword, verifyPassword } from '../controllers/users.js'
import { verifyToken } from '../middleware/auth.js'

const router = express.Router()

/* READ */
router.get('/', verifyToken, getUsers)
router.put('/:id', updateNameOrPassword)
router.post('/verify', verifyPassword)

export default router
