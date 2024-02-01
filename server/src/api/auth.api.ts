import {
  type Response,
  type Request,
  //type NextFunction
} from 'express';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import * as bcrypt from 'bcrypt';
import jwtGenerator from '../utils/jwtGenerator';

export const register = async (
  req: Request,
  res: Response,
  //next: NextFunction
) => {
  const { email, password } = req.body;

  try {
    const existingUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);

    const bcryptPassword = await bcrypt.hash(password, salt);

    const user = await prisma.user.create({
      data: {
        email: email,
        password: bcryptPassword,
      },
    });

    const jwtToken = jwtGenerator(user);

    return res.status(201).json({
      id: user.id,
      username: user.email,
      jwtToken,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const jwtToken = jwtGenerator(user);
    return res.status(200).json(jwtToken);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
