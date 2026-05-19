const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const Cotizacion = require('./models/Cotizacion')
const app = express()

mongoose.connect('mongodb+srv://Admin:B4tm4n11@cluster0.uvkqsof.mongodb.net/proyectoDJ')

  .then(() => {
    console.log('MongoDB conectado 🚀')
  })

  .catch((error) => {
    console.log(error)
  })

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Backend funcionando 🚀')
})
app.post('/cotizacion', async (req, res) => {

  try {

    const nuevaCotizacion = new Cotizacion({

      nombre: req.body.nombre,
      telefono: req.body.telefono,
      fecha: req.body.fecha,
      tipoEvento: req.body.tipoEvento,
      mensaje: req.body.mensaje,
      fueraCDMX: req.body.fueraCDMX,
      presupuestoViaje: req.body.presupuestoViaje

    })

    await nuevaCotizacion.save()

    res.json({
      mensaje: 'Cotización guardada en MongoDB 🚀'
    })

  } catch (error) {

    console.log(error)

    res.status(500).json({
      mensaje: 'Error al guardar'
    })

  }

})
app.get('/cotizaciones', async (req, res) => {

  try {

    const cotizaciones = await Cotizacion.find()

    res.json(cotizaciones)

  } catch (error) {

    console.log(error)

    res.status(500).json({
      mensaje: 'Error al obtener cotizaciones'
    })

  }

})


const PORT = 3000

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`)
})