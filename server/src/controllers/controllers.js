const ctrl = {}
import PostMessage from '../models/model'

ctrl.readPost = async (req, res) => {
     try {
          const postMessage = await PostMessage.find()
          console.log(postMessage)

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


ctrl.updatePost = (req, res) => {
     res.send('Updating')
}

ctrl.deletePost = (req, res) => {
     res.send('Deleting')
}

module.exports = ctrl