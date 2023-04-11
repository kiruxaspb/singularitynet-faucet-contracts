const Token = artifacts.require("NunetToken");

module.exports = function(deployer) {
  deployer.deploy(Token, "NuNet Utility Token", "NTX");
};