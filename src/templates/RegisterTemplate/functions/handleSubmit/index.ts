import { postUser } from 'services/posts/postUser'

export async function handleSubmit(
  data: any,
  setError: any,
  setToken: any,
  navigate: any
) {
  const { username, password } = data
  const response = await postUser({ username, password })

  if (response?.status === 200) {
    const responseData = await response.data.data
    localStorage.setItem('token', responseData.token)
    setToken(responseData.token)
    navigate('/set-avatar')
  } else if (response?.status === 400) {
    setError('username', {
      type: 'manual',
      message: 'Usuário já cadastrado.'
    })
  } else {
    setError('Algo deu errado. Tente novamente mais tarde.')
  }
}
