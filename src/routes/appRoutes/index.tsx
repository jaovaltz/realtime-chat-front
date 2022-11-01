import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { SetAvatarPage } from 'pages/SetAvatarPage'
import { RegisterPage } from 'pages/RegisterPage'
import { LoginPage } from 'pages/LoginPage'
import { ChatPage } from 'pages/ChatPage'
import { HomePage } from 'pages/HomePage'

import { UserProvider, useUserContext } from 'context/UserContext'

export function AppRoutes() {
  const { token } = useUserContext()

  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          {token ? (
            <></>
          ) : (
            <>
              <Route path="/chat" element={<ChatPage />} />
              <Route path="/set-avatar" element={<SetAvatarPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/home" element={<HomePage />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </UserProvider>
  )
}
