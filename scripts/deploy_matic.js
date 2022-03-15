const hre = require("hardhat")

async function main() {
  const AstroWorldMATIC = await hre.ethers.getContractFactory("AstroWorldMATIC")
  const astro = await AstroWorldMATIC.deploy()

  await astro.deployed()

  console.log("AstroWorldMATIC deployed to:", astro.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
