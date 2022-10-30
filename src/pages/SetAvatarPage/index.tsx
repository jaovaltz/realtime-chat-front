import { SetAvatarTemplate } from 'templates/SetAvatarTemplate'

import { SetAvatarProvider } from 'context/SetAvatarImageContext'

export function SetAvatarPage() {
  return (
    <SetAvatarProvider>
      <SetAvatarTemplate />
    </SetAvatarProvider>
  )
}
