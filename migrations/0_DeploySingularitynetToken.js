const Token = artifacts.require("SingularityNetToken");

module.exports = function(deployer) {
  deployer.deploy(Token, "SingularityNET Token", "AGIX");
};