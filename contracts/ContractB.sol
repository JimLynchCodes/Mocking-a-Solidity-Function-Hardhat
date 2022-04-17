//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "./ContractB.sol";

contract ContractB {
    
    ContractB internal contractB;

    constructor (ContractB _contractB) {
        contractB = _contractB;
    }
    
    function doCalculation() public view returns (uint256) {
        return contractB.getSomeNum() * 2;
    }

}