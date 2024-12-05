export const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://opportunehub-lac.vercel.app'
  : 'http://localhost:5000';

export const SOCKET_URL = process.env.NODE_ENV === 'production'
  ? 'https://opportunehub-lac.vercel.app'
  : 'http://localhost:5000';