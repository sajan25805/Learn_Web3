import { ethers } from "ethers";

const Wallet = ethers.Wallet();

/**
 * Creating a wallet with the use of private key.
 * 
 */

const privateKey = "0xf2f48ee19680706196e2e339e5da3491186e0c4c5030670656b0e0164837257d";
const wallet1 = new Wallet(privateKey);


/**
 * Creating a wallet with the use of mnemonics.
 * 
 */

const mnemonic = "plate lawn minor crouch bubble evidence palace fringe bamboo laptop dutch ice";
const wallet2 = new Wallet(mnemonic);

export  {wallet1 as pWallet ,wallet2 as mWallet};


