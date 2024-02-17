import prisma from '@/lib/db';
import * as bcrypt from 'bcrypt';
import { registrationValidator } from '@/lib/validators';
import { signJwtAccessToken } from '@lib/jwt';
import { NextRequest, NextResponse } from 'next/server';
import { COOKIE_NAME, MAX_AGE } from '@/constants';
import { serialize } from 'cookie';

export async function POST(request: NextRequest) {
  const body = await request.json();

  const { email, password } = body;

  const { errors, valid } = registrationValidator(email, password);

  if (!valid) {
    return new NextResponse(JSON.stringify(errors), {
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

    const expires = {
      expiresIn: MAX_AGE,
    };

    const jwtToken = signJwtAccessToken(userWithoutPwd, expires);

    const serializedToken = serialize(COOKIE_NAME, jwtToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: MAX_AGE,
      path: '/',
    });

    const result = {
      message: 'Registration successful',
    };

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { 'Set-Cookie': serializedToken, 'Content-Type': 'application/json' },
    });
  } else {
    return new Response(JSON.stringify({ error: 'User already exists' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
