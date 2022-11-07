import { api } from 'services/api'

export async function postNewMessage(
  contactId: string,
  message: string,
  token: string
) {
  try {
    const response = await api.post(
      `/messages/add-messages`,
      {
        message
      },
      {
        headers: {
          Authorization: `Token ${token}`
        },
        params: {
          to: contactId
        }
      }
    )

    if (response) {
      return response.data
    }
  } catch (error) {
    console.log(error)
  }
}
