import { User } from '@prisma/client';
import { jwtVerify, SignJWT } from 'jose';
import bcrypt from 'bcryptjs';
import prisma from './db';

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || 'your-secret-key-here');

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 10);
}

export async function comparePasswords(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

export async function generateToken(user: User): Promise<string> {
  const token = await new SignJWT({ 
    sub: user.id.toString(),
    email: user.email,
    role: user.role 
  })
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('24h')
    .sign(JWT_SECRET);
  
  return token;
}

export async function verifyToken(token: string) {
  try {
    const verified = await jwtVerify(token, JWT_SECRET);
    return verified.payload;
  } catch (error) {
    return null;
  }
}

export async function registerUser(email: string, password: string, name: string) {
  // Check if user already exists
  const existingUser = await prisma.user.findUnique({
    where: { email }
  });

  if (existingUser) {
    throw new Error('User already exists');
  }

  // Hash password and create user
  const hashedPassword = await hashPassword(password);
  
  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      name,
      role: 'USER' // Default role
    }
  });

  // Generate JWT token
  const token = await generateToken(user);

  return { user, token };
}

export async function loginUser(email: string, password: string) {
  // Find user
  const user = await prisma.user.findUnique({
    where: { email }
  });

  if (!user) {
    throw new Error('Invalid credentials');
  }

  // Verify password
  const isValid = await comparePasswords(password, user.password);
  if (!isValid) {
    throw new Error('Invalid credentials');
  }

  // Generate JWT token
  const token = await generateToken(user);

  return { user, token };
}

export function isAdmin(user: User | null): boolean {
  return user?.role === 'ADMIN';
}