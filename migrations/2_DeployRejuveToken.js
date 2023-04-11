const Token = artifacts.require("RejuveToken");

module.exports = function(deployer) {
  deployer.deploy(Token, "Rejuve Token", "RJV");
};