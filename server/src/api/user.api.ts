import { 
  type Response, 
  type Request, 
  //type NextFunction 
} from 'express'
//import { Bcyrpt } from 'bcyrpt'

export const registerUser = async (
  req: Request,
  res: Response,
  //next: NextFunction
) => {
  const { email, password } = req.body

  try { 
    console.log('email: ', email)
    console.log('password: ', password)
  } catch (error) {
    return res.status(400).json({ message: error.message})
  }

  return res.status(200).json({ message: 'Valid email format' })
}