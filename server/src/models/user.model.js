import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
     name: { type: String, required: true },
     lastname: { type: String, required: true },
     email: { type: String, required: true },
     password: { type: String, required:true },
     id: { type: String},
})

module.exports = mongoose.model('User', userSchema, 'users')
