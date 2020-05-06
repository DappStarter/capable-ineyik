require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue blue shadow shock note pizza smile just ensure slot gasp'; 
let testAccounts = [
"0xda6f79bbbce0512c57ace47dad1643d3b0e076c687362763d4a4705c4465334d",
"0x90bfcd923c56e8e87d41257a2e2794f4a701f4b59801bc16c9c2d3d902de5fd4",
"0x63aa07cfb418020c5b456e7aa4110414f711bf0b08cf4f74cbcc369c8ddd334a",
"0x53aeb006cdfa8cd69dd00aa5092b31b9f5e097fbadca9916710b3a92ce2465fd",
"0xec06abecfc4e556aad9cfe575e5014f0ff257bbc865128b3fb2f851b34fe9a4c",
"0xffc03773873be8d6ddbec8e440390f824d11e7c62edcf95901ac63e9c657f7bd",
"0x6304f6a5e3214fd36ccff048cf9ee0c04f2e3c078ae18a3c74e660da5d015b62",
"0xc75eb54763435d3e61385a248ba9aa1eaeb71a1a1bc13f8b7a24cd72bde96687",
"0x4ac86b0840710be053ebaeb982e0e2f03eb63b5daf89347a6f86a035cc990bd9",
"0x4c7c86f342a729cc6a733e10ff5555efab750f06e84c65ce76dbd6fdabb31e3f"
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
            version: '^0.5.11'
        }
    }
};
