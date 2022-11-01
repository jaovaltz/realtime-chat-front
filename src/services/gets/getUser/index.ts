import { api } from 'services/api'

export async function getUser(token: string) {
  try {
    const response = await api.get('/users/user-profile', {
      headers: {
        Authorization: `Token ${token}`
      }
    })
    if (response) {
      return response.data
    }
  } catch (error) {
    console.log(error)
  }
}
