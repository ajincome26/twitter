import { NextFunction, Request, Response } from 'express'
import usersServices from '~/services/users.services'
import { ParamsDictionary } from 'express-serve-static-core'
import { RegisterReqBody } from '~/models/Requests/User.requests'

export const loginController = (req: Request, res: Response) => {
  const { email, password } = req.body
  if (email === 'tuantu@gmail.com' && password === '123456') {
    return res.json({ massage: 'Login Success' })
  }
  return res.status(400).json({
    message: 'Login Failed'
  })
}
export const registerController = async (
  req: Request<ParamsDictionary, any, RegisterReqBody>,
  res: Response,
  next: NextFunction
) => {
  // throw new Error('loi roi =))')
  const result = await usersServices.register(req.body)
  return res.json({
    message: 'Register Success',
    result
  })
}
