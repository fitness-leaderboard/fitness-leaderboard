interface AuthenticationErrors {
  email?: string;
  password?: string;
}

export const registrationValidator = (email: string, password: string) => {
  const errors: AuthenticationErrors = {};
  // Regular expression for basic email validation

  if (!email || email.trim() === '') {
    errors.email = 'Email is required';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    // Invalid email format
    errors.email = 'Invalid email format';
  }

  if (email.includes('@')) {
    // Extract domain from the email
    const [, domain] = email.split('@');

    // Check if the domain is 'northeastern.edu'
    if (domain.toLowerCase() !== 'northeastern.edu') {
      errors.email = 'Please use your @northeastern.edu email address';
    }
  }

  if (!password || password.trim() === '' || password.length < 6) {
    errors.password = 'Password must be at least 6 characters long';
  }

  return {
    errors,
    valid: Object.keys(errors).length === 0,
  };
};

export const loginValidator = (email: string, password: string) => {
  const errors: AuthenticationErrors = {};

  if (!email || email.trim() === '') {
    errors.email = 'Email is required';
  }

  if (!password || password.trim() === '') {
    errors.password = 'Password is required';
  }

  return {
    errors,
    valid: Object.keys(errors).length === 0,
  };
};
