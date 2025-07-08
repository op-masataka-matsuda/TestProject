export interface User {
  id: string
  username: string
  email: string
  role: 'admin' | 'user'
}

export interface AuthState {
  isAuthenticated: boolean
  user: User | null
  loading: boolean
  error: string | null
}

export interface LoginCredentials {
  username: string
  password: string
} 