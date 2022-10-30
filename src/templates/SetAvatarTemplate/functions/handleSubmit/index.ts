import { postSetAvatarImage } from 'services/posts/postSetAvatarImage'

export async function handleSubmit(
  avatarImage: any,
  navigate: any,
  token?: string
) {
  const response = await postSetAvatarImage(avatarImage, token)
  if (response?.status === 200) {
    navigate('/chat')
  } else {
    console.log(response)
  }
}
