import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
  useCallback,
  useRef
} from 'react'
import { io } from 'socket.io-client'

import { LoaderCustom } from 'components/LoaderCustom'
import { getUserContacts } from 'services/gets/getUserContacts'

type ChatProps = {
  children: ReactNode
}

type ChatContextProps = {
  socket: any
  currentContact: any
  setCurrentContact: (contact: string) => void
  currentContactMessages: any
  setCurrentContactMessages: (messages: any) => void
  contacts: any
  setContacts: (user: any) => void
  loading: boolean
  setLoading: (loading: boolean) => void
}

const ChatContext = createContext({} as ChatContextProps)

export function ChatProvider({ children }: ChatProps) {
  const socket = useRef<any>()

  const [contacts, setContacts] = useState<any>()
  const [currentContactMessages, setCurrentContactMessages] = useState<any>()
  const [currentContact, setCurrentContact] = useState<any>()
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
    if (currentContact) {
      socket.current = io('http://localhost:3001')

      socket.current.emit('add-user', currentContact.id)
    }
  }, [currentContact])

  useEffect(() => {
    if (socket.current) {
      socket.current.on('receive-msg', (data: any) => {
        setCurrentContactMessages((prev: any) => [...prev, data])
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket.current])

  useEffect(() => {
    getUserFromLocalStorage()
  }, [getUserFromLocalStorage])

  return (
    <ChatContext.Provider
      value={{
        socket,
        contacts,
        setContacts,
        currentContactMessages,
        setCurrentContactMessages,
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
