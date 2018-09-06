export const PORT = 3030;

export default {
  TESTNET_SOURCE: 'http://localhost:8669',
  MAINNET_SOURCE: 'http://localhost:8669',
  docs: {
    ping: `http://localhost:${PORT}/ping`,
    testnet: `http://localhost:${PORT}/connect/testnet`,
    mainnet: `http://localhost:${PORT}/connect/mainnet`,
  },
};
