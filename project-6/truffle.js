// Allows us to use ES6 in our migrations and tests.
require('babel-register')
var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = 'physical gold amount aware drop slice grocery nothing meadow produce menu clerk';
var infura = 'https://rinkeby.infura.io/v3/9c3ee1efa4634fa68b07f514eeffce70';
// Edit truffle.config file should have settings to deploy the contract to the Rinkeby Public Network.
// Infura should be used in the truffle.config file for deployment to Rinkeby.

module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '*' // Match any network id
    },
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(mnemonic, infura)
        },
        network_id: '4',
    }
  },
  compilers: {
    solc: {
      version: "0.4.23"
    }
  }
};