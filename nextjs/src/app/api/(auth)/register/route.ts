import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import * as bcrypt from 'bcrypt';
import { registrationValidator } from '@/lib/validators';
import { signJwtAccessToken } from '@lib/jwt';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();

  const { errors, valid } = registrationValidator(email, password);

  if (!valid) {
    return new Response(JSON.stringify(errors), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const existingUser = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (!existingUser) {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const bcryptPassword = await bcrypt.hash(password, salt);

    const user = await prisma.user.create({
      data: {
        email: email,
        password: bcryptPassword,
      },
    });

    const userWithoutPwd = {
      id: user.id,
      email: user.email,
    };

    const jwtToken = signJwtAccessToken(userWithoutPwd);

    const result = {
      id: user.id,
      email: user.email,
      jwtToken,
    };

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } else {
    return new Response(JSON.stringify({ error: 'User already exists' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
