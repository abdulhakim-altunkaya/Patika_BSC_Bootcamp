//SPDX-License-Identifier: MIT

pragma solidity >=0.8.7;

contract Counter {
    uint public total;
    uint public subtracted;
    uint public multiplied;
    uint public divided;

    function add(uint a, uint b) external {
        total = a + b;
    }

    function subtract(uint a, uint b) external {
        require(a >= b, "Contract does not allow negative numbers");
        subtracted = a - b;
    }

    function multiply(uint a, uint b) external {
        multiplied = a * b;
    }

    function divide(uint a, uint b) external {
        require(b != 0, "You cannot divide by 0");
        divided = a / b;
    }

    function getValues() external view returns(uint, uint, uint, uint) {
        return (total, subtracted, multiplied, divided);
    }
}