import { api } from 'services/api'

export async function postSetAvatarImage(avatarImage: any, token?: string) {
  try {
    const response = await api.post(`/auth/setAvatarImage`, avatarImage, {
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
