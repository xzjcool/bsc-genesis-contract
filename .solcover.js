module.exports = {
    client: require('ganache-cli'),
    providerOptions: {
        mnemonic: "clock radar mass judge dismiss just intact mind resemble fringe diary casino"
    },
    skipFiles: [
        'contracts/bep2e_template/BEP2EToken.template',
        'contracts/bep2e_template/LICENCE',
        'contracts/flattened/.gitkeep',
        'contracts/tool/BSCValidatorSetTool.sol'
    ]
};