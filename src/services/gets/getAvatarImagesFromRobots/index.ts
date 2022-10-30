import axios from 'axios'

export async function getAvatarImagesFromRobots() {
  const avatarImages = []
  for (let i = 1; i <= 4; i++) {
    const response = await axios.get(`https://robohash.org/${i}`)
    const avatarImage = response.request.responseURL
    avatarImages.push(avatarImage)
  }
  return avatarImages
}
