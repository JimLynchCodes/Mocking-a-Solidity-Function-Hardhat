const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ContractA", function () {

    let contractA;
    
    beforeEach(async () => {
        const ContractA = await ethers.getContractFactory("ContractA");
        contractA = await ContractA.deploy();
        await contractA.deployed();
    })

    describe('getSomeNum', () => {

        it("returns 1000", async function async () {
            expect(await contractA.getSomeNum()).to.equal(1000);
        });
    
    });

});