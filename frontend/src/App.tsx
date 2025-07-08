import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from './store/store'
import LoginPage from './components/LoginPage'
import Dashboard from './components/Dashboard'
import Layout from './components/Layout'

const App: React.FC = () => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated)

  return (
    // F001-06: 認証成功時のダッシュボードリダイレクト & F002-03: ログイン画面への自動リダイレクト - ルーティング制御
    <Routes>
      <Route path="/login" element={
        isAuthenticated ? <Navigate to="/dashboard" replace /> : <LoginPage />
      } />
      <Route path="/" element={
        isAuthenticated ? <Navigate to="/dashboard" replace /> : <Navigate to="/login" replace />
      } />
      {/* F001-06: 認証成功時のダッシュボードリダイレクト - 認証保護されたルート */}
      <Route path="/dashboard" element={
        isAuthenticated ? 
          <Layout><Dashboard /></Layout> : 
          <Navigate to="/login" replace />
      } />
    </Routes>
  )
}

export default App 