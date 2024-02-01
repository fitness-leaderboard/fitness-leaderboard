import jwt from 'jsonwebtoken';
import { JWT_SECRET } from './config';

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

  return jwt.sign(payload, JWT_SECRET);
}
