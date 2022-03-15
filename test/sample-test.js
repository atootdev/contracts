const { expect } = require("chai")
const { ethers } = require("hardhat")

describe("AstroWorldNFT", function () {
  it("Should deploy", async function () {
    const AstroWorld = await ethers.getContractFactory("Testpass")
    const astroworld = await AstroWorld.deploy()
    await astroworld.deployed()

    expect(await astroworld.name()).to.equal("Test Pass FTM")
    expect(await astroworld.symbol()).to.equal("PASS")

    // const setGreetingTx = await astroworld.setGreeting("Hola, mundo!")

    // // wait until the transaction is mined
    // await setGreetingTx.wait()

    // expect(await astroworld.greet()).to.equal("Hola, mundo!")
  })
})
