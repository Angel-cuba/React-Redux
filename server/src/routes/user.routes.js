import { Router } from 'express';
const router = Router();

import { signUpUser, sigInUser } from '../controllers/user.controller'

router.get('/signin', sigInUser);
router.post('/signup', signUpUser);

export default router;