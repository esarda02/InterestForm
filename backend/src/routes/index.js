import express from 'express';
import configRoutes from './config.js';
import submitRoutes from './submit.js';

const router = express.Router();

router.use(configRoutes);
router.use(submitRoutes);

export default router;
