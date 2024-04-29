import { Router } from 'express';
import { filesRouter } from './files/index.js';

const router = Router();

// Feature routes
router.use('/files', filesRouter);

export default router;
