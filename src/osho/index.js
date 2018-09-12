import express from 'express';

import osho from './engine';

const router = express.Router();

router.get('/', (req, res) => res.send('connect'));
router.get('/testnet', (req, res) => {
  res.send('no token');
});
router.use('/testnet/:token', osho.authGate, osho.testnet);
// router.get('/mainnet/:token', (req, res) => res.redirect(config.MAINNET_SOURCE));

export default router;
