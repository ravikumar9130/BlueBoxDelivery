require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/Dc4Lp6K6kquoCDBV5hV9EC0AVjWAFfpB',
      accounts: ['9a8683287e885a07a90e72768d7d272277f882d044ab47d11bb58418a3ae3251'],
    },
  },
};