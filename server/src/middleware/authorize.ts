import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { Request, Response, NextFunction } from 'express';

dotenv.config();

const jwt_secret = process.env.JWT_SECRET as string;

interface TokenInterface {
  id: string;
  username: string;
}

/*
 This middleware function is used to authorize a user by verifying the token in the request header. If the token is not present or is invalid, the function returns a 403 status code and a message indicating that the user is not authorized. If the token is valid, the function calls the next middleware function in the stack.
*/
export default function authorize(req: Request, res: Response, next: NextFunction) {
  const token = req.header('jwt_token');

  if (!token) {
    return res.status(401).send({ message: 'No auth token found. Authorization denied.' });
  }

  try {
    const decodedToken = jwt.verify(token, jwt_secret) as TokenInterface;

    if (!decodedToken.id) {
      return res.status(401).send({ message: 'Token verification failed. Authorization denied.' });
    }

    req.user = decodedToken.id;
    next();
  } catch (error) {
    console.error(error);
    return res.status(403).json('Not Authorized');
  }
}
