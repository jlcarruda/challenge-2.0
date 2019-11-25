const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const { Schema } = mongoose

const PhoneSchema = new Schema({
  numero: String,
  ddd: String
})

const UserSchema = new Schema({
  nome: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  senha: {
    type: String,
    required: true
  },
  telefones: [ PhoneSchema ],
  ultimo_login: {
    type: Date,
    default: Date.now
  },
  token: String
}, { timestamps: true })

UserSchema.pre('save', function(next) {
  if (!this.isModified('senha')) {
    return next()
  }

  bcrypt.hash(this.senha, 10, function(err, hash) {
    if (err) {
      return next(err)
    }
    this.senha = hash

    next()
  })
})

UserSchema.methods.comparePassword = async function(passwordCandidate) {
  return await bcrypt.compare(passwordCandidate, this.senha)
}

module.exports = mongoose.models.User || mongoose.model('User', UserSchema)