const FaucetV1 = artifacts.require("FaucetV1");

module.exports = function(deployer) {
  deployer.deploy(FaucetV1, "0xdd4292864063d0DA1F294AC65D74d55a44F4766C", "0xDCBD4B7DFd41a96b60B408120213925e41c21b25");
};