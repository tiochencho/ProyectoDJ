import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {

  const navigate = useNavigate()

  const [usuario, setUsuario] = useState('')
  const [password, setPassword] = useState('')

  const iniciarSesion = (e) => {

    e.preventDefault()

    if (
      usuario === 'admin' &&
      password === 'dj2026'
    ) {

      localStorage.setItem('admin', 'true')

      window.location.href = '#/admin'
    } else {

      alert('Datos incorrectos')

    }

  }

  return (

    <div className="min-h-screen bg-black flex items-center justify-center">

      <form
        onSubmit={iniciarSesion}
        className="bg-zinc-900 p-10 rounded-3xl border border-zinc-800 w-full max-w-md"
      >

        <h1 className="text-4xl font-bold text-purple-500 mb-8 text-center">
          Login Admin
        </h1>

        <input
          type="text"
          placeholder="Usuario"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          className="w-full bg-black border border-zinc-700 p-4 rounded-xl mb-5 text-white"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full bg-black border border-zinc-700 p-4 rounded-xl mb-8 text-white"
        />

        <button className="w-full bg-purple-600 hover:bg-purple-700 py-4 rounded-2xl text-lg font-bold text-white">

          Entrar

        </button>

      </form>

    </div>

  )

}

export default Login