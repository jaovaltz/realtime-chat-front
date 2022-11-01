import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
  useCallback
} from 'react'

import { LoaderCustom } from 'components/LoaderCustom'
import { getUserContacts } from 'services/gets/getUserContacts'

type ChatProps = {
  children: ReactNode
}

type ChatContextProps = {
  currentContact?: string | null
  setCurrentContact: (contact: string) => void
  contacts: any
  setContacts: (user: any) => void
  loading: boolean
  setLoading: (loading: boolean) => void
}

const ChatContext = createContext({} as ChatContextProps)

export function ChatProvider({ children }: ChatProps) {
  const [contacts, setContacts] = useState<string | null>()
  const [currentContact, setCurrentContact] = useState<string | null>()
  const [loading, setLoading] = useState(true)

  const getUserFromLocalStorage = useCallback(async () => {
    const data = await localStorage.getItem('token')

    if (data) {
      const response = await getUserContacts(data)
      if (response?.status === 200) {
        setContacts(response.data.data)
      }
    }

    setLoading(false)
  }, [])

  useEffect(() => {
    getUserFromLocalStorage()
  }, [getUserFromLocalStorage])

  return (
    <ChatContext.Provider
      value={{
        contacts,
        setContacts,
        currentContact,
        setCurrentContact,
        loading,
        setLoading
      }}
    >
      {children}
      <LoaderCustom open={loading} />
    </ChatContext.Provider>
  )
}

export function useChatContext() {
  return useContext(ChatContext)
}
