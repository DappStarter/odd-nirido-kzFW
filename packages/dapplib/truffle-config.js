require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt case area system now cruise museum toward coral light army general'; 
let testAccounts = [
"0x44a4b9b38ea70b6ad718ac91d172fb963e9cee381656db4e228aa39c165efe0a",
"0xe2989a37631f1bfa68d66ab8074c8d85570bd5ac5a5c1b66382b9a57f3500498",
"0x7b02889947a6005e659b5c004f9a440ef9c0200c4741c304d1e223d9d8b2a7d9",
"0x571cebed7928b4b89bffd833d516966086731c55b38a12ca419aa22a1045881f",
"0xd63211a3536775c806a0245687fff8c6dbb2b823382111187d060461b2ed123a",
"0x94571ac22a2b28525d50bdcc2d8ab9176c4bf9bb081a128cd456659001a7411c",
"0x25c43f4a4ace544a4fbfdcf3b51f06b3f530b6e4fe4076d2ca1295108cf6cd0e",
"0xfbb81c49932a05a0c1411c58173845d94196a8411b16c4742753703bca96a41c",
"0xdb8101c9b149e5214db326b26792eeddc6be0622021fc87ec5069d9f753a3045",
"0xbd443d6dd5df67406a6dc096f017aa6aaa7cea9070aa5db881ded9785017ec42"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

