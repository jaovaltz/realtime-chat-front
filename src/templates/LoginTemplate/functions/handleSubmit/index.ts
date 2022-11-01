import { loginUser } from 'services/posts/loginUser'

export async function handleSubmit(
  data: any,
  setError: any,
  setToken: any,
  navigate: any
) {
  const { username, password } = data
  const response = await loginUser({ username, password })

  if (response?.status === 200) {
    const responseData = response.data.data

    localStorage.setItem('token', responseData.token)
    setToken(responseData.token)
    navigate('/set-avatar')
  } else {
    setError('username', {
      type: 'manual',
      message: 'Usuário ou senha incorretos.'
    })
    setError('password', {
      type: 'manual',
      message: 'Usuário ou senha incorretos.'
    })
  }
}
