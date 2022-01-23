const SmartContract = artifacts.require("CrypticSteve");

module.exports = function (deployer) {
  deployer.deploy(SmartContract, "Name", "Symbol", "htpps://");
};
