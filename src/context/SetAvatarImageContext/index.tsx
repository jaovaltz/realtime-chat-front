import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect
} from 'react'

import { LoaderCustom } from 'components/LoaderCustom'
import { getAvatarImagesFromRobots } from 'services/gets/getAvatarImagesFromRobots'

type SetAvatarProps = {
  children: ReactNode
}

type SetAvatarContextProps = {
  avatarImages: string[] | null
  setAvatarImages: (avatarImages: string[]) => void
  loading: boolean
  setLoading: (loading: boolean) => void
}

const SetAvatarContext = createContext({} as SetAvatarContextProps)

export function SetAvatarProvider({ children }: SetAvatarProps) {
  const [avatarImages, setAvatarImages] = useState<string[]>([])
  const [loading, setLoading] = useState(true)

  async function getAvatarImagesFromApi() {
    const data = await getAvatarImagesFromRobots()
    setAvatarImages(data)
    setLoading(false)
  }

  useEffect(() => {
    getAvatarImagesFromApi()
  }, [])

  return (
    <SetAvatarContext.Provider
      value={{ loading, setLoading, avatarImages, setAvatarImages }}
    >
      {children}
      <LoaderCustom open={loading} />
    </SetAvatarContext.Provider>
  )
}

export function useSetAvatarContext() {
  return useContext(SetAvatarContext)
}
