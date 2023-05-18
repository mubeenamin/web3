const { expect } = require("chai");

describe("Token contract", function () {
    it("Deployment should assign the total supply of tokens to the owner", async function () {
        const [owner] = await ethers.getSigners();
        console.log("Signers object", owner);
        const Tokens = await ethers.getContractFactory("Token");// create instance
        const hardhatToken = await Tokens.deploy();// deploy contract
        const ownerBalance = await hardhatToken.balanceOf(owner.address);// check owner balance
        console.log("Owner Address", owner.address);

        expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);// total supply 
    });

    it("Should Transfer tokens between accounts", async function () {
        const [owner, address1, address2] = await ethers.getSigners();

        const Tokens = await ethers.getContractFactory("Token");// create instance
        const hardhatToken = await Tokens.deploy();// deploy contract
        // transfer tokens to address1
        await hardhatToken.transfer(address1.address, 100);
        expect(await hardhatToken.balanceOf(address1.address)).to.equal(100);

        // transfer tokens to address2
        await hardhatToken.connect(address1).transfer(address2.address, 50);
        expect(await hardhatToken.balanceOf(address2.address)).to.equal(50);


    });
});