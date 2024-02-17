import jwt, { JwtPayload } from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
console.log('process.env.JWT_SECRET', process.env.JWT_SECRET);

interface SignOption {
  expiresIn?: string | number;
}

const DEFAULT_SIGN_OPTION: SignOption = {
  expiresIn: '7d',
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
    return decoded as JwtPayload;
  } catch (error) {
    console.error('Error in verifyJwt', error);
  }
}
