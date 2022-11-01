import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
  useCallback
} from 'react'

import { LoaderCustom } from 'components/LoaderCustom'
import { getUser } from 'services/gets/getUser'

type UserProps = {
  children: ReactNode
}

type UserContextProps = {
  handleLogout: any
  currentUser: any
  setCurrentUser: (user: any) => void
  token: any
  setToken: (user: any) => void
  loading: boolean
  setLoading: (loading: boolean) => void
}

const UserContext = createContext({} as UserContextProps)

export function UserProvider({ children }: UserProps) {
  const [token, setToken] = useState<string | null>()
  const [currentUser, setCurrentUser] = useState<string | null>()
  const [loading, setLoading] = useState(true)

  const handleLogout = () => {
    localStorage.removeItem('token')
    setToken(null)
    setCurrentUser(null)
  }

  const getUserFromLocalStorage = useCallback(async () => {
    const token = localStorage.getItem('token')

    if (token) {
      const response = await getUser(token)

      if (response) {
        setCurrentUser(response.data)
      } else {
        localStorage.removeItem('token')
      }
    }
    setToken(token)
    setLoading(false)
  }, [])

  useEffect(() => {
    getUserFromLocalStorage()
  }, [getUserFromLocalStorage])

  return (
    <UserContext.Provider
      value={{
        handleLogout,
        token,
        setToken,
        currentUser,
        setCurrentUser,
        loading,
        setLoading
      }}
    >
      {children}
      <LoaderCustom open={loading} />
    </UserContext.Provider>
  )
}

export function useUserContext() {
  return useContext(UserContext)
}
