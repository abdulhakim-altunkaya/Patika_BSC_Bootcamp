const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Counter contract Testing", () => {
  
    let counter;
    beforeEach("contract deployment", async () => {
        const Counter = await ethers.getContractFactory("Counter");
        counter = await Counter.deploy();
    })

    it("should add 5 with 4 and return 9", async () => {
        await counter.add(5, 4);
        expect(await counter.total()).to.equal(9);
    });

    it("Should multiply 6 with 3 and return 18", async () => {
        await counter.multiply(6,3);
        expect(await counter.multiplied()).to.equal(18);
    });

    it("Should subtract 6 from 7 and return 1", async () => {
        await counter.subtract(7,6);
        expect(await counter.subtracted()).to.equal(1);
    });

    it("Should divide 66 by 2 and return 33", async () => {
        await counter.divide(66,2);
        expect(await counter.divided()).to.equal(33);
    })
});

