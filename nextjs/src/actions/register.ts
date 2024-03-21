'use server';

import * as z from 'zod';
import bcrypt from 'bcryptjs';

import { prisma } from '@/lib/db';
import { RegisterSchema } from '@/schema';

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Invalid fields!' };
  }

  const { firstName, lastName, email, password } = validatedFields.data;
  const fullName = `${firstName.charAt(0).toUpperCase()}${firstName.slice(1)} ${lastName
    .charAt(0)
    .toUpperCase()}${lastName.slice(1)}`;

  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (existingUser) {
    return { error: 'Email already in use!' };
  }

  await prisma.user.create({
    data: {
      name: fullName,
      email,
      password: hashedPassword,
    },
  });

  return { success: 'Confirmation email sent!' };
};
