import express from 'express';
import config from './config';

const router = express.Router();

router.get('/', (req, res) => res.send('connect'));
router.get('/testnet', (req, res) => {
  res.send('no token');
});
router.get('/testnet/:token', (req, res) => {
  if (!req.params.token) return res.send('no token');
  return res.redirect(307, `${config.TESTNET_SOURCE}/blocks/best`);
});
router.get('/mainnet/:token', (req, res) => res.redirect(config.MAINNET_SOURCE));

export default router;
