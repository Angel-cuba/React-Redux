const ctrl = {}
import PostMessage from '../models/model'
import mongoose from 'mongoose'

ctrl.readPost = async (req, res) => {
     try {
          const postMessage = await PostMessage.find()
          // console.log(postMessage)

          res.status(200).json(postMessage)
     } catch (error) {
          res.status(404).json({ message: error.message })
     }
}

ctrl.createPost = async(req, res) => {
     const post = req.body

     const newPost = new PostMessage(post)

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

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('Invalid post id')

    const post = await PostMessage.findById(_id)
    const updatePost= await PostMessage.findByIdAndUpdate(_id, { likeCount : post.likeCount + 1}, { new: true})

    res.json(updatePost) 
}

ctrl.deletePost = async (req, res) => {
    const { id: _id } = req.params

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('Invalid post id')

    await PostMessage.findByIdAndRemove(_id)
    res.json({message: 'Post deleted'})
}

module.exports = ctrl