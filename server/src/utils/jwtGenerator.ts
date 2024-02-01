import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const jwt_secret = process.env.JWT_SECRET as string;

interface User {
  id: number;
  email: string;
  password: string;
}

export default function jwtGenerator(user: User) {
  const payload = {
    user: user.id,
    email: user.email,
  };

  return jwt.sign(payload, jwt_secret);
}
