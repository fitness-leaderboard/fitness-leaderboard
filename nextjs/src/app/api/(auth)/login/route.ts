import prisma from '@/lib/db';
import * as bcrypt from 'bcrypt';
import { loginValidator } from '@/lib/validators';
import { signJwtAccessToken } from '@lib/jwt';
import { NextRequest, NextResponse } from 'next/server';
import { serialize } from 'cookie';
import { COOKIE_NAME, MAX_AGE } from '@/constants';

export async function POST(request: NextRequest) {
  const body = await request.json();

  const { email, password } = body;

  const { errors, valid } = loginValidator(email, password);

  if (!valid) {
    return new NextResponse(JSON.stringify(errors), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const user = await prisma.user.findFirst({
    where: {
      email: email,
    },
  });

  if (user && (await bcrypt.compare(password, user.password))) {
    const { password, createdAt, updatedAt, ...rest } = user;

    const expires = {
      expiresIn: MAX_AGE,
    };

    const jwtToken = signJwtAccessToken(rest, expires);

    const serializedToken = serialize(COOKIE_NAME, jwtToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: MAX_AGE,
      path: '/',
    });

    const result = {
      message: 'Login successful',
    };

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { 'Set-Cookie': serializedToken, 'Content-Type': 'application/json' },
    });
  } else {
    return new NextResponse(JSON.stringify({ error: 'Invalid credentials' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
