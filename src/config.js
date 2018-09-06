export const PORT = 3030;

export default {
  docs: {
    ping: `http://localhost:${PORT}/ping`,
    testnet: `http://localhost:${PORT}/connect/testnet/THIS_IS_TESTING_TOKEN`,
    mainnet: `http://localhost:${PORT}/connect/mainnet/THIS_IS_TESTING_TOKEN`,
  },
};
