const ctrl = {}
import PostMessage from '../models/post.model'
import mongoose from 'mongoose'

import cloudinary from 'cloudinary';
import { cloudinaryDB } from '../keytoserver/key';

cloudinary.config({
     cloud_name: cloudinaryDB.CLOUD_NAME,
     api_key: cloudinaryDB.API_KEY,
     api_secret: cloudinaryDB.API_SECRET,
})

ctrl.readPost = async (req, res) => {
     try {
          const postMessage = await PostMessage.find()
          // console.log(postMessage)

          res.status(200).json(postMessage)
     } catch (error) {
          res.status(404).json({ message: error.message })
     }
}

ctrl.getPostBySearch = async (req, res) => {
     const { searchQuery, tags } = req.query
     
     try {
          const title = new RegExp(searchQuery, 'i')

          const posts = await PostMessage.find({ $or: [{ title }, { tags : { $in: tags.split(',') } }] })

          res.json({ data : posts })
          
     } catch (error) {
          res.status(404).json({  message: error.message })
     }
}

ctrl.createPost = async(req, res) => {
     const post = req.body
     //     console.log(post)
     const newPost = new PostMessage({...post, creator: req.userId, createdAt: new Date().toISOString()})

     try {
          await newPost.save()

          res.status(200).json(newPost)
     } catch (error) {
          res.status(409).json({ message: error})
     }
}


ctrl.updatePost = async(req, res) => {
     const { id: _id } = req.params
     const body = req.body

     if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with this id')

     const updatePost = await PostMessage.findByIdAndUpdate(_id, { ...body, _id }, { new: true})

     res.json(updatePost)


}

ctrl.likePost = async(req, res) => {
    const { id: _id } = req.params

    if(!req.userId) return res.json({ message: 'Unauthenticated'})

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('Invalid post id')

    const post = await PostMessage.findById(_id)

     const index = post.likes.findIndex((_id) => _id === String(req.userId))
    if(index === -1){
         // like the post
          post.likes.push(req.userId)
    }else{
         // dislike the post
          post.likes = post.likes.filter((_id) => _id !== String(req.userId))
    }

    const updatePost= await PostMessage.findByIdAndUpdate(_id, post, { new: true})
    //{ likeCount : post.likeCount + 1}

    res.json(updatePost) 
}

ctrl.deletePost = async (req, res) => {
    const { id: _id } = req.params

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('Invalid post id')

    await PostMessage.findByIdAndRemove(_id)
    res.json({message: 'Post deleted'})
}

module.exports = ctrl