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

      <h1 className="text-5xl font-bold mb-10 text-purple-500">
        Panel Admin
      </h1>

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

          </div>

        ))}

      </div>

    </div>

  )

}

export default Admin