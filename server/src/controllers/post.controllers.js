const ctrl = {};
const PostMessage = require('../models/post.model');
const mongoose = require('mongoose');
const cloudinary = require('cloudinary');
const { cloudinaryDB } = require('../keytoserver/key');

cloudinary.config({
	cloud_name: cloudinaryDB.CLOUD_NAME,
	api_key: cloudinaryDB.API_KEY,
	api_secret: cloudinaryDB.API_SECRET,
});

ctrl.readPost = async (req, res) => {
	const { page } = req.query;

	try {
		//limits of post for pages
		const LIMIT = 8;
		//get the starting index of every page
		const startIndex = (Number(page) - 1) * LIMIT;
		const total = await PostMessage.countDocuments({});

		const postMessage = await PostMessage.find().sort({ _id: -1 }).limit(LIMIT).skip(startIndex);

		res.status(200).json({
			data: postMessage,
			currentPage: Number(page),
			numberOfPages: Math.ceil(total / LIMIT),
		});
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

ctrl.getPostBySearch = async (req, res) => {
	const { searchQuery, tags } = req.query;

	try {
		const title = new RegExp(searchQuery, 'i');

		const posts = await PostMessage.find({ $or: [{ title }, { tags: { $in: tags.split(',') } }] });

		res.json({ data: posts });
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

ctrl.readPostById = async (req, res) => {
	const { id } = req.params;

	try {
		const post = await PostMessage.findById(id);
		res.status(200).json(post);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

ctrl.readAllByUserId = async (req, res) => {
	const { id: _id } = req.params;
	try {
		const allPosts = await PostMessage.find({ creator: _id });
		res.send(allPosts);
		// console.log(allPosts);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

ctrl.createPost = async (req, res) => {
	const post = req.body;
	//     console.log(post)
	const newPost = new PostMessage({
		...post,
		creator: req.userId,
		createdAt: new Date().toISOString(),
	});

	try {
		await newPost.save();

		res.status(200).json(newPost);
	} catch (error) {
		res.status(409).json({ message: error });
	}
};

ctrl.updatePost = async (req, res) => {
	const { id: _id } = req.params;
	const body = req.body;

	if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with this id');

	const updatePost = await PostMessage.findByIdAndUpdate(
		_id,
		{ ...body, _id, createdAt: new Date().toISOString() },
		{ new: true }
	);

	res.json(updatePost);
};

ctrl.likePost = async (req, res) => {
	const { id: _id } = req.params;

	if (!req.userId) return res.json({ message: 'Unauthenticated' });

	if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('Invalid post id');

	const post = await PostMessage.findById(_id);

	const index = post.likes.findIndex((_id) => _id === String(req.userId));
	if (index === -1) {
		// like the post
		post.likes.push(req.userId);
	} else {
		// dislike the post
		post.likes = post.likes.filter((_id) => _id !== String(req.userId));
	}

	const updatePost = await PostMessage.findByIdAndUpdate(_id, post, { new: true });
	//{ likeCount : post.likeCount + 1}

	res.json(updatePost);
};

ctrl.commentPost = async (req, res) => {
	const { id } = req.params;
	const { value } = req.body;

	const post = await PostMessage.findById(id);

	post.comments.push(value);

	const updatePost = await PostMessage.findByIdAndUpdate(id, post, { new: true });

	res.json(updatePost);
};

ctrl.deletePost = async (req, res) => {
	const { id: _id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('Invalid post id');

	await PostMessage.findByIdAndRemove(_id);
	res.json({ message: 'Post deleted' });
};

module.exports = ctrl;
