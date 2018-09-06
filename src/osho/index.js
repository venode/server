import express from 'express';
import config from './config';

const router = express.Router();

router.get('/', (req, res) => res.send('connect'));
router.get('/testnet/:token', (req, res) => res.redirect(config.TESTNET_SOURCE));
router.get('/mainnet/:token', (req, res) => res.redirect(config.MAINNET_SOURCE));

export default router;
