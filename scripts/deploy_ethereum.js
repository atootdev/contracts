const hre = require("hardhat")

async function main() {
  const AstroWorldETH = await hre.ethers.getContractFactory("AstroWorldETH")
  const astro = await AstroWorldETH.deploy()

  await astro.deployed()

  console.log("AstroWorldETH deployed to:", astro.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
