import express from 'express';
const router = express.Router();
import { uploadImage, getImage } from '../controller/image.controller.js';
import upload from '../utils/upload.js';

router.post('/upload', upload.single('file'), uploadImage);
router.get('/file/:fileId', getImage);

export default router;