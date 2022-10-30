import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect
} from 'react'

import { LoaderCustom } from 'components/LoaderCustom'

type UserProps = {
  children: ReactNode
}

type UserContextProps = {
  token: any
  setToken: (user: any) => void
  loading: boolean
  setLoading: (loading: boolean) => void
}

const UserContext = createContext({} as UserContextProps)

export function UserProvider({ children }: UserProps) {
  const [token, setToken] = useState<any>()
  const [loading, setLoading] = useState(true)

  async function getUserFromLocalStorage() {
    const data = await localStorage.getItem('token')

    setToken(data)
    setLoading(false)
  }

  useEffect(() => {
    getUserFromLocalStorage()
  }, [])

  return (
    <UserContext.Provider value={{ token, setToken, loading, setLoading }}>
      {children}
      <LoaderCustom open={loading} />
    </UserContext.Provider>
  )
}

export function useUserContext() {
  return useContext(UserContext)
}
