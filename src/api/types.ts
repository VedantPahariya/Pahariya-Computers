export interface LoginRequest {
    email: string;
    password: string;
  }
  
  export interface RegisterRequest extends LoginRequest {
    name: string;
  }
  
  export interface AuthResponse {
    user: {
      id: number;
      email: string;
      name: string;
      role: string;
    };
    token: string;
  }
  
  export interface ApiError {
    error: string;
  }