import prisma from '@/lib/db';
import * as bcrypt from 'bcrypt';
import { loginValidator } from '@/lib/validators';
import { signJwtAccessToken } from '@lib/jwt';
import { NextRequest, NextResponse } from 'next/server';
import { serialize } from 'cookie';
import { COOKIE_NAME, MAX_AGE } from '@/constants';
import { cookies } from 'next/headers';

export async function POST() {
  const cookieStore = cookies();

  const token = cookieStore.get(COOKIE_NAME);

  if (!token) {
    return new NextResponse('You are not logged in', {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const expires = {
    expiresIn: -1,
  };

  const jwtToken = signJwtAccessToken(token, expires);

  const serializedToken = serialize(COOKIE_NAME, jwtToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: -1,
    path: '/',
  });

  const result = {
    message: 'Logout successful',
  };

  return new Response(JSON.stringify(result), {
    status: 200,
    headers: { 'Set-Cookie': serializedToken, 'Content-Type': 'application/json' },
  });
}
