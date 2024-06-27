import express from 'express';
import config from '../config/index.js';

const router = express.Router();

router.get('/config', (req, res) => {
  console.log('GET /config');
  res.json(config);
});

export default router;
