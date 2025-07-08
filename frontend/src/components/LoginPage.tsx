import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Alert,
  Box,
  CircularProgress,
} from '@mui/material'
import { LoginRounded as LoginIcon } from '@mui/icons-material'
import { RootState } from '../store/store'
import { loginAsync, clearError } from '../store/authSlice'

const LoginPage: React.FC = () => {
  const dispatch = useDispatch()
  const { loading, error } = useSelector((state: RootState) => state.auth)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  // F001-01: ユーザーIDとパスワードによる認証 - ログインフォーム送信処理
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (username && password) {
      dispatch(clearError())
      // @ts-ignore - 型エラーを無視（実際のプロジェクトでは適切に型付けする）
      dispatch(loginAsync({ username, password }))
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Paper elevation={3} sx={{ padding: 4, width: '100%' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <LoginIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
            <Typography component="h1" variant="h4" gutterBottom>
              TestProject
            </Typography>
            <Typography component="h2" variant="h6" color="text.secondary" gutterBottom>
              ログイン
            </Typography>

            {/* F001-05: 認証失敗時のエラーメッセージ表示 - エラーメッセージ表示 */}
            {error && (
              <Alert severity="error" sx={{ width: '100%', mb: 2 }}>
                {error}
              </Alert>
            )}

            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1, width: '100%' }}>
              {/* F001-01: ユーザーIDとパスワードによる認証 - ユーザー名入力フィールド */}
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="ユーザー名"
                name="username"
                autoComplete="username"
                autoFocus
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                disabled={loading}
              />
              {/* F001-01: ユーザーIDとパスワードによる認証 - パスワード入力フィールド */}
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="パスワード"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={loading || !username || !password}
                startIcon={loading ? <CircularProgress size={20} /> : <LoginIcon />}
              >
                {loading ? 'ログイン中...' : 'ログイン'}
              </Button>
            </Box>

            <Box sx={{ mt: 2 }}>
              <Typography variant="body2" color="text.secondary">
                テストアカウント:
              </Typography>
              <Typography variant="body2" color="text.secondary">
                管理者: admin / password
              </Typography>
              <Typography variant="body2" color="text.secondary">
                一般ユーザー: user / password
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Container>
  )
}

export default LoginPage 