import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { SetAvatarPage } from 'pages/SetAvatarPage'
import { RegisterPage } from 'pages/RegisterPage'
import { LoginPage } from 'pages/LoginPage'
import { ChatPage } from 'pages/ChatPage'
import { HomePage } from 'pages/HomePage'

import { UserProvider } from 'context/UserContext'

export function AppRoutes() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/set-avatar" element={<SetAvatarPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          <Route path="/home" element={<HomePage />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  )
}
