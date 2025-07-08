import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Avatar,
  Menu,
  MenuItem,
  Chip,
} from '@mui/material'
import { LogoutRounded as LogoutIcon, AccountCircle } from '@mui/icons-material'
import { RootState } from '../store/store'
import { logout } from '../store/authSlice'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const dispatch = useDispatch()
  const { user } = useSelector((state: RootState) => state.auth)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  // F002-01: ログアウトボタンによる明示的なログアウト - ログアウト処理
  const handleLogout = () => {
    // F002-02: セッション無効化処理 - Redux状態のクリア
    dispatch(logout())
    setAnchorEl(null)
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            TestProject
          </Typography>
          
          {user && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Chip
                label={user.role === 'admin' ? '管理者' : '一般ユーザー'}
                color={user.role === 'admin' ? 'secondary' : 'default'}
                size="small"
              />
              <Button
                onClick={handleMenu}
                startIcon={<AccountCircle />}
                color="inherit"
                sx={{ textTransform: 'none' }}
              >
                {user.username}
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>
                  <Typography variant="body2">
                    {user.email}
                  </Typography>
                </MenuItem>
                {/* F002-01: ログアウトボタンによる明示的なログアウト - ログアウトメニュー */}
                <MenuItem onClick={handleLogout}>
                  <LogoutIcon sx={{ mr: 1 }} />
                  ログアウト
                </MenuItem>
              </Menu>
            </Box>
          )}
        </Toolbar>
      </AppBar>
      
      <Box component="main" sx={{ flexGrow: 1, padding: 3 }}>
        {children}
      </Box>
    </Box>
  )
}

export default Layout 