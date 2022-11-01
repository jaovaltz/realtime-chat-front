import { postSetAvatarImage } from 'services/posts/postSetAvatarImage'

export async function handleSubmit(
  avatarImage: any,
  navigate: any,
  token?: string,
  setUser?: any
) {
  const response = await postSetAvatarImage(avatarImage, token)
  if (response?.status === 200) {
    setUser(response.data.data)
    navigate('/chat')
  } else {
    console.log(response)
  }
}
