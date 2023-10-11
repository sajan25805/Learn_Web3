const { utils, providers, Wallet } = require('ethers');
const { ganacheProvider, PRIVATE_KEY } = require('./config');

// Create a Web3Provider from the Ganache provider
const provider = new providers.Web3Provider(ganacheProvider);

/**
 * Donate at least 1 ether from the wallet to each charity
 * @param {string} a hex string private key for a wallet with 10 ETH
 * @param {array} an array of Ethereum charity addresses
 * @returns {Promise} a promise that resolves after all donations have been sent
 */
async function donate(privateKey, charities) {
    try {
        // Create a Wallet using the provided private key and associate it with the provider
        const wallet = new Wallet(privateKey, provider);

        // Converting 1 ETH to Wei
        const value = utils.parseEther('1');

        // Sending 1 ETH to each charity in the array
        for (const charityAddress of charities) {
            const transaction = await wallet.sendTransaction({
                value,
                to: charityAddress,
            });

            await transaction.wait();
        }

        // All donations are complete
        console.log('Donations completed successfully.');

        return true; // Indicate success with a boolean value
    } catch (error) {
        console.error('Donation error:', error);
        return false; // Indicate failure with a boolean value
    }
}

module.exports = donate;
