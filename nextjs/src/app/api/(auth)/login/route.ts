import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import * as bcrypt from 'bcrypt';
import { loginValidator } from '@/lib/validators';
import { signJwtAccessToken } from '@lib/jwt';
import { NextRequest } from 'next/server';
import { NextApiRequest } from 'next/types';

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();

  console.log('email:', email);
  console.log('password:', password);

  const { errors, valid } = loginValidator(email, password);

  if (!valid) {
    return new Response(JSON.stringify(errors), {
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
    const jwtToken = signJwtAccessToken(rest);

    const result = {
      ...rest,
      jwtToken,
    };
    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } else {
    return new Response(JSON.stringify({ error: 'Invalid credentials' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
