const { expect } = require("chai");
const { waffle } = require("hardhat");

const ContractAJson = require('../artifacts/contracts/ContractA.sol/ContractA.json');

const { deployMockContract } = waffle;

describe("ContractB", function () {

    let contractB;

    const mockCalculationResult = 20;

    beforeEach(async () => {

        const [owner] = waffle.provider.getWallets();
        const ContractA = await deployMockContract(owner, ContractAJson.abi);
        const contractA = await ContractA.deployed();

        await ContractA.mock.getSomeNum.returns(mockCalculationResult)

        const ContractB = await ethers.getContractFactory("ContractB");
        contractB = await ContractB.deploy(contractA.address);
        await contractB.deployed();
    })
    
    describe('doCalculation', () => {
        
        it('return double what contractA\'s getSomeNum returns', async () => {
            const result = await contractB.doCalculation()
            expect(result).to.equal(mockCalculationResult * 2);
        }); 

    });

});