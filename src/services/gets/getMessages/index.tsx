import { api } from 'services/api'

export async function getMessages(contactId: any, token: string) {
  const messages = await api.get('/messages/get-messages', {
    headers: {
      Authorization: `Token ${token}`
    },
    params: {
      to: contactId
    }
  })

  return messages.data
}
