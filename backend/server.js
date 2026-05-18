const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Backend funcionando ')
})
app.post('/cotizacion', (req, res) => {

  console.log(req.body)

  res.json({
    mensaje: 'Cotización recibida correctamente'
  })

})
const PORT = 3000

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`)
})