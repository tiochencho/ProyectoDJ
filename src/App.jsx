import { useState } from 'react'
import djImage from './assets/DJ.png'

function App() {
  const [mostrarViaje, setMostrarViaje] = useState(false)
  return (
    <div className="bg-black text-white min-h-screen">

      {/* NAVBAR */}
      <header className="flex justify-between items-center px-8 py-5 border-b border-gray-800">

        <h1 className="text-3xl font-bold text-purple-500">
          Gustavo Delgadillo DJ
        </h1>

        <a
          href="https://wa.me/5215512345678"
          target="_blank"
          className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-xl"
        >
          WhatsApp
        </a>

      </header>

      {/* HERO */}
      <section
        className="relative h-screen flex items-center justify-center text-center px-6"
        style={{
          backgroundImage: `url(${djImage})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Contenido */}
        <div className="relative z-10">

          <h2 className="text-6xl md:text-7xl font-extrabold max-w-5xl leading-tight">
            Producción DJ & Eventos Premium
          </h2>

          <p className="text-gray-300 text-xl mt-8 max-w-2xl mx-auto">
            Música, iluminación y experiencias inolvidables para bodas, fiestas y eventos empresariales.
          </p>

          <div className="flex flex-col md:flex-row gap-5 justify-center mt-10">

            <a
              href="https://wa.me/5215512345678"
              target="_blank"
              className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-2xl text-lg font-semibold"
            >
              Contratar Evento
            </a>

            <button className="border border-gray-500 hover:border-purple-500 px-8 py-4 rounded-2xl text-lg">
              Ver Servicios
            </button>

          </div>

        </div>

      </section>

      {/* SERVICIOS */}
      <section className="px-8 py-24 bg-zinc-950">

        <h3 className="text-5xl font-bold text-center mb-16">
          Nuestros Servicios
        </h3>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800 hover:border-purple-500 transition">

            <h4 className="text-3xl font-bold mb-4 text-purple-400">
              DJ Profesional
            </h4>

            <p className="text-gray-400">
              Música en vivo para bodas, fiestas privadas y eventos premium.
            </p>

          </div>

          <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800 hover:border-purple-500 transition">

            <h4 className="text-3xl font-bold mb-4 text-purple-400">
              Iluminación
            </h4>

            <p className="text-gray-400">
              Luces robóticas, lasers y efectos visuales profesionales.
            </p>

          </div>

          <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800 hover:border-purple-500 transition">

            <h4 className="text-3xl font-bold mb-4 text-purple-400">
              Producción Premium
            </h4>

            <p className="text-gray-400">
              Audio, cabina DJ, CO2 y pirotecnia para eventos inolvidables.
            </p>

          </div>

        </div>

      </section>

      {/* PRECIOS */}
      <section className="px-8 py-24">

        <h3 className="text-5xl font-bold text-center mb-16">
          Paquetes DJ
        </h3>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10">

            <h4 className="text-4xl font-bold text-purple-400 mb-4">
              DJ Básico
            </h4>

            <p className="text-5xl font-extrabold mb-6">
              $5,500
            </p>

            <ul className="space-y-4 text-gray-300">

              <li>✔ 5 horas de servicio</li>
              <li>✔ DJ Profesional</li>
              <li>✔ Bocina</li>
              <li>✔ Cabina DJ</li>
              <li>✔ Iluminación básica</li>

            </ul>

          </div>

          <div className="bg-purple-700 rounded-3xl p-10">

            <h4 className="text-4xl font-bold mb-4">
              Premium
            </h4>

            <p className="text-5xl font-extrabold mb-6">
              $7,500
            </p>

            <ul className="space-y-4">

              <li>✔ DJ Profesional</li>
              <li>✔ CO2</li>
              <li>✔ Lasers</li>
              <li>✔ Cabezas robóticas</li>
              <li>✔ Pirotecnia</li>

            </ul>

          </div>

        </div>

      </section>

      {/* CONTACTO */}
      <section className="px-8 py-24 bg-zinc-950">

        <h3 className="text-5xl font-bold text-center mb-16">
          Solicita tu Evento
        </h3>

        <div className="max-w-3xl mx-auto bg-zinc-900 p-10 rounded-3xl border border-zinc-800">

          <form
            className="flex flex-col gap-6"
            onSubmit={async (e) => {

              e.preventDefault()

              const respuesta = await fetch('http://localhost:3000/cotizacion', {

                method: 'POST',

                headers: {
                  'Content-Type': 'application/json'
                },

                body: JSON.stringify({

                  nombre: 'Yael',
                  telefono: '5512345678',
                  fecha: '2026-06-20',
                  tipoEvento: 'Boda',
                  mensaje: 'Evento premium',
                  fueraCDMX: mostrarViaje,
                  presupuestoViaje: 4250

                })

              })

              const data = await respuesta.json()

              alert(data.mensaje)

            }}
          >

            <input
              type="text"
              placeholder="Nombre completo"
              className="bg-black border border-zinc-700 p-4 rounded-xl"
            />

            <input
              type="text"
              placeholder="Teléfono"
              className="bg-black border border-zinc-700 p-4 rounded-xl"
            />
            {mostrarViaje && (

              <div className="bg-black border border-purple-500 p-6 rounded-2xl">

                <h4 className="text-3xl font-bold text-purple-400 mb-5">
                  Presupuesto de Viaje
                </h4>

                <input
                  type="text"
                  placeholder="Destino del evento"
                  className="w-full bg-zinc-900 border border-zinc-700 p-4 rounded-xl mb-5"
                />

                <div className="space-y-3 text-gray-300">

                  <p>🚗 Gasolina estimada: $1,200</p>

                  <p>🛣 Casetas: $850</p>

                  <p>🏨 Hospedaje: $1,500</p>

                  <p>🍔 Alimentación staff: $700</p>

                </div>

                <div className="mt-6 text-2xl font-bold text-green-400">

                  Total extra estimado: $4,250 MXN

                </div>

              </div>

            )}
            <input

              type="text"
              placeholder="Ubicación del evento"
              className="bg-black border border-zinc-700 p-4 rounded-xl"
            />

            <label className="flex items-center gap-3 text-gray-300">

              <input
                type="checkbox"
                onChange={(e) => setMostrarViaje(e.target.checked)}
              />

              Evento fuera de CDMX
              (puede generar costos adicionales de traslado y hospedaje)

            </label>

            <textarea
              placeholder="Cuéntanos sobre tu evento"
              rows="5"
              className="bg-black border border-zinc-700 p-4 rounded-xl"
            ></textarea>
            <p className="text-yellow-400 bg-zinc-800 p-4 rounded-xl border border-yellow-500">

              ⚠ Para solicitar el evento es necesario un anticipo de $1500 MXN.

            </p>
            <button className="bg-purple-600 hover:bg-purple-700 py-4 rounded-2xl text-lg font-bold">
              Solicitar Cotización
            </button>

          </form>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="bg-black border-t border-zinc-800 px-8 py-10">

        <div className="text-center">

          <h4 className="text-3xl font-bold text-purple-500">
            Gustavo Delgadillo DJ
          </h4>

          <p className="text-gray-400 mt-2">
            Producción DJ & Eventos Premium
          </p>

          <div className="flex justify-center gap-6 mt-6">

            <a href="#" className="hover:text-purple-400">
              Instagram
            </a>

            <a href="#" className="hover:text-purple-400">
              WhatsApp
            </a>

          </div>

          <p className="text-gray-500 mt-10">
            © 2026 Gustavo Delgadillo DJ
          </p>

        </div>

      </footer>

    </div>
  )
}

export default App