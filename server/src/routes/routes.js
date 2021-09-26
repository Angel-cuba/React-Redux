import { Router } from 'express';
const router = Router();

import { readPost, updatePost, createPost, deletePost } from '../controllers/controllers';

router.get('/read', readPost);
router.post('/create', createPost);
router.put('/update', updatePost);
router.delete('/delete/:id', deletePost);


export default router