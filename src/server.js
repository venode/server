import express from 'express';
import osho from './osho';
import config, { PORT } from './osho/config';

const app = express();

app.get('/ping', (req, res) => res.send('pong'));
app.use('/connect', osho);

app.get('/', (req, res) => res.send(config.docs));

app.listen(PORT);
console.log(`Listening on ${PORT}`); /* eslint-disable-line */
