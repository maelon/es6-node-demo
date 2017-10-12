import express from 'express';

import handler from '../controllers/index';

const router = express.Router();
router.get('/', handler.root);
router.get('/fib/:n', handler.fib);

export default router;
