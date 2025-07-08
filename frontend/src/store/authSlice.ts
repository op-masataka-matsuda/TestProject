import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AuthState, User, LoginCredentials } from '../types'

// F001-04: セッション管理 - 認証状態の管理
const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  error: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true
      state.error = null
    },
    // F001-04: セッション管理 - 認証成功時の状態更新
    loginSuccess: (state, action: PayloadAction<User>) => {
      state.isAuthenticated = true
      state.user = action.payload
      state.loading = false
      state.error = null
    },
    // F001-05: 認証失敗時のエラーメッセージ表示 - エラー状態の設定
    loginFailure: (state, action: PayloadAction<string>) => {
      state.isAuthenticated = false
      state.user = null
      state.loading = false
      state.error = action.payload
    },
    // F002-02: セッション無効化処理 - ログアウト時の状態クリア
    logout: (state) => {
      state.isAuthenticated = false
      state.user = null
      state.loading = false
      state.error = null
    },
    clearError: (state) => {
      state.error = null
    },
  },
})

// F001-01: ユーザーIDとパスワードによる認証 - 非同期ログイン処理
export const loginAsync = (credentials: LoginCredentials) => {
  return async (dispatch: any) => {
    dispatch(authSlice.actions.loginStart())
    
    try {
      // 実際のプロジェクトではAPI呼び出しを行う
      await new Promise(resolve => setTimeout(resolve, 1000)) // 模擬的な遅延
      
      // F001-01: ユーザーIDとパスワードによる認証 - 認証情報の検証
      if (credentials.username === 'admin' && credentials.password === 'password') {
        const user: User = {
          id: '1',
          username: 'admin',
          email: 'admin@example.com',
          role: 'admin',
        }
        // F001-06: 認証成功時のダッシュボードリダイレクト - 成功処理
        dispatch(authSlice.actions.loginSuccess(user))
      } else if (credentials.username === 'user' && credentials.password === 'password') {
        const user: User = {
          id: '2',
          username: 'user',
          email: 'user@example.com',
          role: 'user',
        }
        // F001-06: 認証成功時のダッシュボードリダイレクト - 成功処理
        dispatch(authSlice.actions.loginSuccess(user))
      } else {
        // F001-05: 認証失敗時のエラーメッセージ表示 - エラー処理
        dispatch(authSlice.actions.loginFailure('ユーザー名またはパスワードが間違っています'))
      }
    } catch (error) {
      // F001-05: 認証失敗時のエラーメッセージ表示 - 例外処理
      dispatch(authSlice.actions.loginFailure('ログインに失敗しました'))
    }
  }
}

export const { logout, clearError } = authSlice.actions
export default authSlice.reducer 