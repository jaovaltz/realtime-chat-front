import { loginUser } from 'services/posts/loginUser'

export async function handleSubmit(data: any, setError: any, setToken: any) {
  const { username, password } = data
  const response = await loginUser({ username, password })

  if (response?.status === 200) {
    localStorage.setItem('token', response.data)
    setToken(response.data)
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
