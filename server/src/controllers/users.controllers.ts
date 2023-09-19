import { Request, Response } from 'express'
import User from '~/models/schemas/User.schema'
import databaseService from '~/services/database.services'
import usersServices from '~/services/users.services'

export const loginController = (req: Request, res: Response) => {
  const { email, password } = req.body
  if (email === 'tuantu@gmail.com' && password === '123456') {
    return res.json({ massage: 'Login Success' })
  }
  return res.status(400).json({
    message: 'Login Failed'
  })
}
export const registerController = async (req: Request, res: Response) => {
  const { email, password } = req.body
  try {
    const result = await usersServices.register({ email, password })
    return res.json({
      message: 'Register Success',
      result
    })
  } catch (error) {
    return res.status(400).json({
      message: 'Login Failed'
    })
  }
}
