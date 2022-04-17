const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ContractB", function () {

    let contractB;

    beforeEach(async () => {
        const ContractA = await ethers.getContractFactory("ContractA");
        const contractA = await ContractA.deploy();
        await contractA.deployed();
    
        const ContractB = await ethers.getContractFactory("ContractB");
        contractB = await ContractB.deploy(contractA.address);
        await contractB.deployed();
    })
    
    describe('doCalculation', () => {
        
        it('return double what contractA\'s getSomeNum returns', async () => {
            const result = await contractB.doCalculation()
            expect(result).to.equal(2000);
        }); 

    });

});