export const validateEmail = (email: string): boolean => {
  // Regular expression for basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!emailRegex.test(email)) {
    // Invalid email format
    return false
  }

  // Extract domain from the email
  const [, domain] = email.split('@')

  // Check if the domain is 'northeastern.edu'
  return domain.toLowerCase() === 'northeastern.edu'
}
