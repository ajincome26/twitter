import { Request, Response } from 'express'

export const loginController = (req: Request, res: Response) => {
  const { email, password } = req.body
  if (email === 'tuantu@gmail.com' && password === '123456') {
    return res.json({ massage: 'Login Success' })
  }
  return res.status(400).json({
    message: 'Login Failed'
  })
}
