import express from 'express';
import { userSignup } from '../controller/user-controller.js';


const router = express.Router();


router.post('/signup');

export default router;