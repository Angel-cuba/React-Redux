const express = require('express');
const router = require('express').Router();

const {
	readPost,
	readPostById,
	updatePost,
	createPost,
	deletePost,
	likePost,
	getPostBySearch,
	commentPost,
} = require('../controllers/post.controllers');
const auth = require('../middleware/auth');

router.get('/search', getPostBySearch);
router.get('/read', readPost);
router.get('/read/:id', readPostById);
router.post('/create', auth, createPost);
router.post('/comment/:id', auth, commentPost);
router.put('/update/:id', auth, updatePost);
router.delete('/delete/:id', auth, deletePost);
router.patch('/like/:id', auth, likePost);

module.exports = router;
// export default router
