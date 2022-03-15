const hre = require("hardhat")

async function main() {
  const AstroWorldFTM = await hre.ethers.getContractFactory("AstroWorldFTM")
  const astro = await AstroWorldFTM.deploy()

  await astro.deployed()

  console.log("AstroWorldFTM deployed to:", astro.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
