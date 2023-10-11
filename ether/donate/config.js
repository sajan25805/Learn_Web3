const { providers } = require('ethers');

module.exports = {
    PRIVATE_KEY: '0xYourPrivateKeyHere', // Replace with your private key
    provider: new providers.JsonRpcProvider(''), // Replace with your Ethereum provider URL
    charities: ['0xCharityAddress1', '0xCharityAddress2', '0xCharityAddress3'], // Add actual charity addresses
};
