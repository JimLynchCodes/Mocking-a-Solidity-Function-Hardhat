//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "./ContractA.sol";

contract ContractB {
    
    ContractA internal contractA;

    constructor (ContractA _contractA) {
        contractA = _contractA;
    }
    
    function doCalculation() public view returns (uint256) {
        return contractA.getSomeNum() * 2;
    }

}