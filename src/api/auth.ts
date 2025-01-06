import { API_ENDPOINTS } from './endpoints';
import type { LoginRequest, RegisterRequest, AuthResponse, ApiError } from './types';

async function handleResponse<T>(response: Response): Promise<T> {
  const contentType = response.headers.get('content-type');
  const isJson = contentType?.includes('application/json');
  
  if (!response.ok) {
    if (isJson) {
      const error = await response.json() as ApiError;
      throw new Error(error.error || 'An error occurred');
    }
    throw new Error('An error occurred');
  }

  if (isJson) {
    return response.json() as Promise<T>;
  }
  
  throw new Error('Invalid response format');
}

export async function handleRegister(req: Request) {
  try {
    const body = await req.json() as RegisterRequest;
    const { email, password, name } = body;

    if (!email || !password || !name) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const response = await fetch(API_ENDPOINTS.AUTH.REGISTER, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });

    const data = await handleResponse<AuthResponse>(response);
    
    return new Response(JSON.stringify(data), {
      status: 201,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    const error = err as Error;
    return new Response(JSON.stringify({ error: error.message || 'Registration failed' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

export async function handleLogin(req: Request) {
  try {
    const body = await req.json() as LoginRequest;
    const { email, password } = body;

    if (!email || !password) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const response = await fetch(API_ENDPOINTS.AUTH.LOGIN, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(body)
    });

    const data = await handleResponse<AuthResponse>(response);
    
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    const error = err as Error;
    return new Response(JSON.stringify({ error: error.message || 'Login failed' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}