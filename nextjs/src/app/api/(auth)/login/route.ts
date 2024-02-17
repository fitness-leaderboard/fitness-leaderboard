import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import * as bcrypt from 'bcrypt';
import { loginValidator } from '@/lib/validators';
import { signJwtAccessToken } from '@lib/jwt';
import { NextRequest, NextResponse } from 'next/server';
import { serialize } from 'cookie';

export async function POST(request: NextRequest) {
  const body = await request.json();

  const { email, password } = body;

  console.log('email:', email);
  console.log('password:', password);

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

    const MAX_AGE = 60 * 60 * 24 * 7;

    const expires = {
      expiresIn: 60 * 60 * 24 * 7,
    };

    const jwtToken = signJwtAccessToken(rest, expires);

    const serializedToken = serialize('OutSiteJWT', jwtToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: MAX_AGE,
      path: '/',
    });

    const result = {
      message: 'Login successful',
      // These two will not be needed, cookie has jwtToken and ...rest is unneeded cuz of token
      ...rest,
      jwtToken,
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
