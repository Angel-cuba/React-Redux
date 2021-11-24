const express = require('express');
const router = require('express').Router();

const { signUpUser, sigInUser } = require('../controllers/user.controller');

router.post('/signin', sigInUser);
router.post('/signup', signUpUser);

module.exports = router;
