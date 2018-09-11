// on dapinet devnet September 2018 (protx 1, 2896)
const mnListDiffOld = {
  baseBlockHash: '3f4a8012763b1d9b985cc77b0c0bca918830b1ef7dd083665bdc592c2cd31cf6',
  blockHash: '000004543e350b99f43114fe0bf649344a28f4fde6785d80e487d90689ae3918',
  deletedMNs: [],
  mnList: [
    {
      proRegTxHash: 'f7737beb39779971e9bc59632243e13fc5fc9ada93b69bf48c2d4c463296cd5a',
      service: '207.154.244.13:19999',
      keyIDOperator: '43ce12751c4ba45dcdfe2c16cefd61461e17a54d',
      keyIDVoting: '43ce12751c4ba45dcdfe2c16cefd61461e17a54d',
      isValid: true,
    },
    {
      proRegTxHash: '85c11a56c7ebc5d0b6abf32d6e60870516595a861a73e96d771c04edd26423ab',
      service: '207.154.249.154:19999',
      keyIDOperator: 'e0f05fac2f981f182aab2df9c8dbc8e06dc038b8',
      keyIDVoting: 'e0f05fac2f981f182aab2df9c8dbc8e06dc038b8',
      isValid: true,
    },
    {
      proRegTxHash: '75aa128db4cd7679fd88206bd6ef71f57e1b6fe04c2da5515193a6fcd40a47eb',
      service: '159.89.110.184:19999',
      keyIDOperator: '03d90b1cdc04f1dbe435a4ba51ca2d1ddb53e08c',
      keyIDVoting: '03d90b1cdc04f1dbe435a4ba51ca2d1ddb53e08c',
      isValid: true,
    },
  ],
  merkleRootMNList: 'adbb061b19bdcd582b50fae5a29c857e34058d23db79e6defdc8a3498cc2969a',
};

const mnListDiffHex = "0000000000000000000000000000000000000000000000000000000000000000a022418a003b689b9b82c23473ef8df189fbb2c03b3f9cf3b53c0160fc966e190100000001ef45ec04d27938efb81184f97ceab908dbb66245c2dbffdf97b82b92bcddbd6e010103000500010000000000000000000000000000000000000000000000000000000000000000ffffffff050290070101ffffffff0200c11a3d05000000232103eead733a081b6559bbe32c3a0c55ce861614df5b5c69b65125072e59339ce547ac00c11a3d050000001976a914c490201bdda0e64e3e1d8bdd6bbf7d80686f0e8588ac0000000024900700006c45528d7b8d4e7a33614a1c3806f4faf5c463f0b313aa0ece1ce12c34154a44000e16e11b50a91d95a82f64283edd47b890baf8a74af3d408206111574cb8b32a1600000000000000000000ffff34dde84732c7827b241e43c47dbac1fb5697409a537fca3424a4827b241e43c47dbac1fb5697409a537fca3424a401368d37774de9e4694b94caff82737b72b3914e70f8d34905b644491ddf4dc42400000000000000000000ffff34ddcac432c7454921eb604faad14ab5772a1738b648c27d7b0b454921eb604faad14ab5772a1738b648c27d7b0b013c692906f231771f2e1c19a15c2863a9c04b864ff2c45bd0fd46f91231a38bad00000000000000000000ffff36a98e4832c71344d247bc20849a10e025dea103790f45addd951344d247bc20849a10e025dea103790f45addd9501451ecdfdbb5ac685f56ec547d62174fbc5cd0b268a908d8336573b34c978ab6800000000000000000000ffff344de70d32c71d33b834ffbd8a4fa1dc8cf951d4c660d9b057a81d33b834ffbd8a4fa1dc8cf951d4c660d9b057a80146cb295d8deb1ca477d0bbb714299b49cddbd13d7683adb5b45773280ed9f43100000000000000000000ffff36fb805732c73b268262cb533fa71c8d201ac95b47d7b9dc235d3b268262cb533fa71c8d201ac95b47d7b9dc235d015192c6531b6cc9acb5d39e7724c5dd45ebbafc6ad506d43db3c94f4bc5bf842c00000000000000000000ffff344ddc0932c786b1026279914cf9bf9c7e09bdf4e11e32efa81686b1026279914cf9bf9c7e09bdf4e11e32efa81601535aca9cde16ebc6d6a51914b6c524044df6d6a87ec7c23c3dc7f355ff445fb500000000000000000000ffff36ffba0132c713a15c179c1aa56bd6f7823a82adf121d26fae7113a15c179c1aa56bd6f7823a82adf121d26fae71016572053adbdc2d1ae4955b2c1574366d8b2f9e2734144632030e4c832792292900000000000000000000ffff36a9837332c706c1a2a01cabcb73328a0c1581c708e302836aaf06c1a2a01cabcb73328a0c1581c708e302836aaf01662d6de9ed5a85646ebf9e04b63537993be345ed28ebd253c8c0bda5a325ef8700000000000000000000ffff0dfa0ebf32c7def5bfceb759577766dc3029fd8080ad07baa70cdef5bfceb759577766dc3029fd8080ad07baa70c01675ebde16c8719292812b68ed422fefc2a4f74461b6e7af20acf9b676c65082a00000000000000000000ffff0dfa64fe32c7028aee2a88678d9e7d068284e87eac794a3d6501028aee2a88678d9e7d068284e87eac794a3d6501016d8fd38216a9d76492fad8e72f0ba161784bcf5f888ab66daceca75db3dabfc200000000000000000000ffff0de5e9e732c771915a515a000d0080800b735b439598d1f3c3b071915a515a000d0080800b735b439598d1f3c3b00197855159eaadf7e3d0f6fc0b2ffdaaad2a5ffeb1e858fa88d979f3c2042132cd00000000000000000000ffff0dfa2d2132c79fcc35836c2ed6b477a3323a37128eb70cb4ff039fcc35836c2ed6b477a3323a37128eb70cb4ff0301a921e6d02823147dda734f8a0bef79d2ccc94cd4e3dc06d5378cbfb051b4a12400000000000000000000ffff0de5466d32c74fab17021bd32fd24492187a1205a28247ff1f864fab17021bd32fd24492187a1205a28247ff1f8601aa0e74b6f56eebbf55849f7fc40bf2f163d57e0752a6f724554f6e12fd4ad3f300000000000000000000ffff36ffa45332c7b9d093370f55b4196374e0d83ff11a2259589abcb9d093370f55b4196374e0d83ff11a2259589abc01"


module.exports = mnListDiffHex;
