import jwt, { JwtPayload } from 'jsonwebtoken';
import dotenv from 'dotenv';
import { MAX_AGE } from '@/constants';

dotenv.config();

interface SignOption {
  expiresIn?: string | number;
}

const DEFAULT_SIGN_OPTION: SignOption = {
  expiresIn: MAX_AGE,
};

export function signJwtAccessToken(payload: JwtPayload, option: SignOption = DEFAULT_SIGN_OPTION) {
  const secretKey = process.env.JWT_SECRET || '';
  const token = jwt.sign(payload, secretKey, option);
  return token;
}

export function verifyJwt(token: string) {
  try {
    const secretKey = process.env.JWT_SECRET || '';
    const decoded = jwt.verify(token, secretKey);
  } catch (error) {
    throw new Error('Invalid token');
  }
}
