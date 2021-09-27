import { Router } from 'express';
const router = Router();

import { readPost, updatePost, createPost, deletePost, likePost } from '../controllers/controllers';

router.get('/read', readPost);
router.post('/create', createPost);
router.put('/update/:id', updatePost);
router.delete('/delete/:id', deletePost);
router.patch('/like/:id', likePost);


export default router