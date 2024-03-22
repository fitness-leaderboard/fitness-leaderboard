/**
 * An array of routes that are public and do not require authentication
 * @type {string[]}
 */

export const publicRoutes = ['/', '/auth/new-verification'];

/**
 * An array of routes that are used for authentication
 * These routes will redirect logged in users to /profile
 * @type {string[]}
 */
export const authRoutes = ['/auth/login', '/auth/register', '/auth/reset', '/auth/new-password'];

/**
 * The prefix for API Authentication routes
 * Routes that start with this prefix are used for API
 * authentication purposes
 * @type {string}
 */
export const apiAuthPrefix = '/api/auth';

export const DEFAULT_LOGIN_REDIRECT = '/profile';
