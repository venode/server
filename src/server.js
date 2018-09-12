import express from 'express';
import osho from './osho';
import { PORT } from './config';
import oshoConfig from './osho/config';

const app = express();

app.get('/ping', (req, res) => res.send('pong'));
app.use('/connect', osho);

app.get('/', (req, res) => res.redirect(oshoConfig.MAINNET_SOURCE));

app.listen(PORT, () => console.log(`Listening on ${PORT}`)); /* eslint-disable-line */
app.listen(PORT + 5, () => console.log(`Listening on ${PORT+5}`)); /* eslint-disable-line */
