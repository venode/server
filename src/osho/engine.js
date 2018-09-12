import axios from 'axios';
import config from './config';

const authGate = (req, res, next) => {
  if (!req.params.token) return res.send('no token');
  return next();
};

const testnet = (req, res) => {
  const apiRoute = req.originalUrl.replace(req.baseUrl, '');
  axios.get(`${config.MAINNET_SOURCE}${apiRoute}`)
    .then(response => res.json(response.data))
    .catch(error => console.log(error.message));
};

export default { authGate, testnet };
