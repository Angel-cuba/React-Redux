import { Router } from 'express';
const router = Router();

import { readPost, readPostById, updatePost, createPost, deletePost, likePost, getPostBySearch } from '../controllers/post.controllers';
import auth from '../middleware/auth'

router.get('/search', getPostBySearch)
router.get('/read', readPost);
router.get('/read/:id', readPostById)
router.post('/create', auth, createPost);
router.put('/update/:id', auth, updatePost);
router.delete('/delete/:id', auth, deletePost);
router.patch('/like/:id', auth, likePost);


export default router