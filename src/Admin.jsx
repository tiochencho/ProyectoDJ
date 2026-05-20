import { useEffect, useState } from 'react'

function Admin() {

  const [cotizaciones, setCotizaciones] = useState([])

  useEffect(() => {

    obtenerCotizaciones()

  }, [])

  const obtenerCotizaciones = async () => {

    const respuesta = await fetch('http://localhost:3000/cotizaciones')

    const data = await respuesta.json()

    setCotizaciones(data)

  }

  return (

    <div className="min-h-screen bg-black text-white p-10">

      <div className="flex justify-between items-center mb-10">

  <h1 className="text-5xl font-bold text-purple-500">
    Panel Admin
  </h1>

  <button

    onClick={() => {

      localStorage.removeItem('admin')

      window.location.href = '/admin'

    }}

    className="bg-red-600 hover:bg-red-700 px-5 py-3 rounded-xl"
  >

    Cerrar Sesión

  </button>

</div>

      <div className="grid gap-6">

        {cotizaciones.map((cotizacion) => (

          <div
            key={cotizacion._id}
            className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800"
          >

            <h2 className="text-3xl font-bold text-purple-400">
              {cotizacion.nombre}
            </h2>

            <p className="mt-3">
              📞 {cotizacion.telefono}
            </p>

            <p>
              🎉 {cotizacion.tipoEvento}
            </p>

            <p>
              📅 {cotizacion.fecha}
            </p>

            <p>
              💬 {cotizacion.mensaje}
            </p>

            <p>
              🚗 Fuera CDMX:
              {cotizacion.fueraCDMX ? ' Sí' : ' No'}
            </p>

            <p>
              💰 Viaje:
              ${cotizacion.presupuestoViaje}
            </p>
<button

  onClick={async () => {

    await fetch(`http://localhost:3000/cotizacion/${cotizacion._id}`, {

      method: 'DELETE'

    })

    obtenerCotizaciones()

  }}

  className="mt-5 bg-red-600 hover:bg-red-700 px-5 py-3 rounded-xl"
>

  🗑 Eliminar

</button>
          </div>

        ))}

      </div>

    </div>

  )

}

export default Admin