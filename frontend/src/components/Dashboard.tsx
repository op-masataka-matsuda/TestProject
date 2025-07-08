import React from 'react'
import { useSelector } from 'react-redux'
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Paper,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material'
import {
  DashboardRounded as DashboardIcon,
  PeopleRounded as PeopleIcon,
  SettingsRounded as SettingsIcon,
  AssessmentRounded as AssessmentIcon,
  NotificationsRounded as NotificationsIcon,
  SecurityRounded as SecurityIcon,
} from '@mui/icons-material'
import { RootState } from '../store/store'

const Dashboard: React.FC = () => {
  const { user } = useSelector((state: RootState) => state.auth)

  const adminFeatures = [
    { icon: <PeopleIcon />, title: 'ユーザー管理', description: 'システムユーザーの管理' },
    { icon: <SettingsIcon />, title: 'システム設定', description: 'システム全般の設定' },
    { icon: <SecurityIcon />, title: 'セキュリティ', description: 'セキュリティ設定と監視' },
  ]

  const userFeatures = [
    { icon: <AssessmentIcon />, title: 'レポート', description: 'データの閲覧と分析' },
    { icon: <NotificationsIcon />, title: '通知', description: '重要な通知とアラート' },
  ]

  const features = user?.role === 'admin' ? [...adminFeatures, ...userFeatures] : userFeatures

  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
        <DashboardIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
        ダッシュボード
      </Typography>

      <Grid container spacing={3}>
        {/* ユーザー情報カード */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Avatar sx={{ bgcolor: 'primary.main', mr: 2 }}>
                  {user?.username.charAt(0).toUpperCase()}
                </Avatar>
                <Box>
                  <Typography variant="h6">
                    {user?.username}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {user?.email}
                  </Typography>
                </Box>
              </Box>
              <Typography variant="body2" color="text.secondary">
                役割: {user?.role === 'admin' ? '管理者' : '一般ユーザー'}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* 統計情報カード */}
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                システム統計
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Paper sx={{ p: 2, textAlign: 'center' }}>
                    <Typography variant="h4" color="primary">
                      42
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      総ユーザー数
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper sx={{ p: 2, textAlign: 'center' }}>
                    <Typography variant="h4" color="success.main">
                      98.5%
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      システム稼働率
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* 機能一覧 */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                利用可能な機能
              </Typography>
              <List>
                {features.map((feature, index) => (
                  <React.Fragment key={index}>
                    <ListItem>
                      <ListItemIcon>
                        {feature.icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={feature.title}
                        secondary={feature.description}
                      />
                    </ListItem>
                    {index < features.length - 1 && <Divider />}
                  </React.Fragment>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* 最近の活動 */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                最近の活動
              </Typography>
              <List>
                <ListItem>
                  <ListItemText
                    primary="システムにログインしました"
                    secondary={new Date().toLocaleString('ja-JP')}
                  />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText
                    primary="プロファイルを更新しました"
                    secondary="2024年1月15日 10:30"
                  />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText
                    primary="新しい通知があります"
                    secondary="2024年1月14日 16:45"
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Dashboard 