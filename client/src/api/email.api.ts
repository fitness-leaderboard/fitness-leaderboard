import { json } from "stream/consumers";

const HOST = process.env.PORT || "http://localhost:8080";

export async function validateEmailFormat(email: string) {
  const response = await fetch(`${HOST}/email/validateFormat?email=${email}`);
  if (response.status === 400) {
    throw new Error('Invalid email format');
  }
  return response;
}

export async function sendVerificationEmail(email: string) {
  const response = await fetch(`${HOST}/email/verifyEmail`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email })
  });
  if (response.status === 400) {
    throw new Error('Invalid email format');
  }
  return response;
}

export async function sendForgotPasswordEmail(email: string) {
  const response = await fetch(`${HOST}/email/forgotPassword`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email })
  });
  if (response.status === 400) {
    throw new Error('Invalid email format');
  }
  return response;
}