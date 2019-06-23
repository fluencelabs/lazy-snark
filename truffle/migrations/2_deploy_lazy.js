var Verifier = artifacts.require('Verifier');
var VerifierProxy = artifacts.require('VerifierProxy');
var Lazy = artifacts.require('Lazy');

const proof1 = [["0x12d0dbcfc1da3ea29bc017288fceea3929401f4f12dbd0bba73781420d31aa2d","0x2811c1eaa63f4a804951bd7f994cbb6bea9df64591793b8392400e8756d1bca7"],[["0x04c33f68e1bd55be0928b086c647debcdf7aa0e3c3efc6a8efbc2596a77a0e67","0x17e7392e0e3ec2b5701e675e6e0569330d03ffffe476fc8d63cfeaa0ba1c8a97"],["0x2fc402693a54cd1b176abeed209674f2f12ced1496c6ce27ba8cf16903daa4cc","0x2c47efba3f4f260da643bb6427d08b551bb3446537d6ac4857d611be2355a446"]],["0x04d40f14694092d0f70890a20492b2b68e7eaabdcee744e519678d687c9c3ed0","0x28de140e393154b0e70b3ef12806af963a4a33b45c24e7864391093b6028fa2b"]]
const input1 = [["0x00000000000000000000000000000000c6481e22c5ff4164af680b8cfaa5e8ed","0x000000000000000000000000000000003120eeff89c4f307c4a6faaae059ce10","0x000000000000000000000000000000005b6d7d198c48c17c9540d29275a04662","0x00000000000000000000000000000000f7a9aa434629a33c84eec3e16e196f27","0x0000000000000000000000000000000000000000000000000000000000000001"]]
module.exports = async function(deployer, network, accounts) {
	deployer.then(async() => {
		await deployer.deploy(Verifier)
		await deployer.deploy(VerifierProxy, Verifier.address)
		var contract = await deployer.deploy(Lazy, VerifierProxy.address)
		await contract.submit([[1,2,3,4,5]],[[1,2],[[3,4],[5,6]],[7,8]])
		await contract.submit(input1,proof1)

	})
}
