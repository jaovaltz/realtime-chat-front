import { postUser } from 'services/posts/postUser'

export async function handleSubmit(data: any, setError: any, setToken: any) {
  const { username, email, password } = data
  const response = await postUser({ username, email, password })

  if (response?.status === 201) {
    localStorage.setItem('token', response.data)
    setToken(response.data)
  } else if (response?.status === 400) {
    setError('email', {
      type: 'manual',
      message: 'E-mail ou usuário já existem'
    })
    setError('username', {
      type: 'manual',
      message: 'Email ou usuário já existem'
    })
  } else {
    setError('Algo deu errado. Tente novamente mais tarde.')
  }
}
