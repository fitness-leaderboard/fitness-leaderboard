import { COOKIE_NAME } from '@/constants';
import { verifyJwt } from '@/lib/jwt';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET() {
  const cookieStore = cookies();

  const token = cookieStore.get(COOKIE_NAME);

  if (!token) {
    return new NextResponse('Unauthorized', {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const decoded = verifyJwt(token.value);

    const response = {
      user: decoded,
    };

    return new NextResponse(JSON.stringify(response), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new NextResponse('Unauthorized', {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
