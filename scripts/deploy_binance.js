const hre = require("hardhat")

async function main() {
  const AstroWorldBNB = await hre.ethers.getContractFactory("AstroWorldBNB")
  const astro = await AstroWorldBNB.deploy()

  await astro.deployed()

  console.log("AstroWorldBNB deployed to:", astro.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
