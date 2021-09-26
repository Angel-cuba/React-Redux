import mongoose from 'mongoose'


const Schema = mongoose.Schema({
     title: String,
     message: String,
     creator: String,
     tags: [String],
     selectedFile: String,
     likeCount: {
          type: Number,
          default: 0,
     },
     createdAt: {
          type: Date,
          default: new Date()
     }
})

module.exports = mongoose.model('PostMessage', Schema, 'crud')