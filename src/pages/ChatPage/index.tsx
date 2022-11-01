import { ChatProvider } from 'context/ChatContext'
import { ChatTemplate } from 'templates/ChatTemplate'

export function ChatPage() {
  return (
    <ChatProvider>
      <ChatTemplate />
    </ChatProvider>
  )
}
