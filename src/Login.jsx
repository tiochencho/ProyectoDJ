import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {

  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const login = () => {

    if (user === 'admin' && password === '1234') {

      localStorage.setItem('admin', 'true')

      navigate('/admin')

    } else {

      alert('Datos incorrectos')

    }

  }

  return (

    <div className="min-h-screen bg-black flex items-center justify-center">

      <div className="bg-zinc-900 p-10 rounded-3xl w-full max-w-md border border-zinc-800">

        <h1 className="text-4xl font-bold text-purple-500 mb-8 text-center">
          Admin Login
        </h1>

        <div className="flex flex-col gap-5">

          <input
            type="text"
            placeholder="Usuario"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            className="bg-black border border-zinc-700 p-4 rounded-xl text-white"
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-black border border-zinc-700 p-4 rounded-xl text-white"
          />

          <button
            onClick={login}
            className="bg-purple-600 hover:bg-purple-700 py-4 rounded-2xl text-lg font-bold text-white"
          >

            Entrar

          </button>

        </div>

      </div>

    </div>

  )

}

export default Login