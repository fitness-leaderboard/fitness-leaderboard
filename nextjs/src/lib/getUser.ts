import axios, { AxiosError } from 'axios';

interface UserResponse {
  user: string | null;
  error: AxiosError | null;
}

export async function getUser(): Promise<UserResponse> {
  try {
    const { data } = await axios.get('/api/me');
    return {
      user: data,
      error: null,
    };
  } catch (err) {
    const error = err as AxiosError;
    return {
      user: null,
      error,
    };
  }
}
