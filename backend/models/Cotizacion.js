const mongoose = require('mongoose')

const CotizacionSchema = new mongoose.Schema({

  nombre: {
    type: String,
    required: true
  },

  telefono: {
    type: String,
    required: true
  },

  fecha: {
    type: String
  },

  tipoEvento: {
    type: String
  },

  mensaje: {
    type: String
  },

  fueraCDMX: {
    type: Boolean,
    default: false
  },

  presupuestoViaje: {
    type: Number,
    default: 0
  }

})

module.exports = mongoose.model('Cotizacion', CotizacionSchema)