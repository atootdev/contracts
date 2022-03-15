require("@nomiclabs/hardhat-waffle")
require("@nomiclabs/hardhat-etherscan")
const dotenv = require("dotenv")
dotenv.config()

const INFURA_API_KEY = process.env.INFURA_API_KEY
const PRI_KEY = process.env.PRI_KEY
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY
const POLYGONSCAN_API_KEY = process.env.POLYGONSCAN_API_KEY
const BINANCESCAN_API_KEY = process.env.BINANCESCAN_API_KEY
const FTMSCAN_API_KEY = process.env.FTMSCAN_API_KEY

module.exports = {
  networks: {
    mainnet: {
      url: `https://ethereum.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [`${PRI_KEY}`],
    },
    ropsten: {
      url: `https://ropsten.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [`${PRI_KEY}`],
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [`${PRI_KEY}`],
    },
    matic: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [`${PRI_KEY}`],
    },
    binance: {
      url: "https://bsc-dataseed.binance.org/",
      chainId: 56,
      accounts: [`${PRI_KEY}`],
    },
    binance_test: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      chainId: 97,
      accounts: [`${PRI_KEY}`],
    },
    fantom: {
      url: "https://rpc.ftm.tools/",
      chainId: 250,
      accounts: [`${PRI_KEY}`],
    },
    fantom_test: {
      url: "https://rpc.testnet.fantom.network/",
      chainId: 0xfa2,
      accounts: [`${PRI_KEY}`],
    },
  },
  etherscan: {
    apiKey: {
      mainnet: `${ETHERSCAN_API_KEY}`,
      rinkeby: `${ETHERSCAN_API_KEY}`,
      bsc: `${BINANCESCAN_API_KEY}`,
      bscTestnet: `${BINANCESCAN_API_KEY}`,
      opera: `${FTMSCAN_API_KEY}`,
      ftmTestnet: `${FTMSCAN_API_KEY}`,
      polygon: `${POLYGONSCAN_API_KEY}`,
    },
  },
  solidity: {
    version: "0.6.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
}
