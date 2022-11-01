import { api } from 'services/api'

export async function getUserContacts(token: string) {
  try {
    const response = await api.get('/users/get-contacts', {
      headers: {
        Authorization: `Token ${token}`
      }
    })

    if (response) {
      return response
    }
  } catch (error) {
    console.log(error)
  }
}
