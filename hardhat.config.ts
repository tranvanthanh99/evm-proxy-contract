import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-ethers";
import "@nomiclabs/hardhat-etherscan";
import "@openzeppelin/hardhat-upgrades";
import "@typechain/hardhat";
import "dotenv/config";
import { rpc } from "./config/rpc";
import { API_KEY } from "./config/api-key";

const getPK = (env?: string): string => {
  switch (env) {
    case "test":
      return process.env.TEST_KEY ?? "";
    case "dev":
      return process.env.DEV_KEY ?? "";
    case "prod":
      return process.env.PROD_KEY ?? "";
    case "new":
      return process.env.NEW_KEY ?? "";
    case "local":
      return process.env.LOCAL_KEY ?? "";
    default:
      return "";
  }
};

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.19",
    // settings: {
    //   optimizer: {
    //     enabled: false,
    //     runs: 200,
    //   }
    // }
  },
  networks: {
    bscMainnet: {
      url: rpc.BSC.mainnet[0],
      accounts: [getPK(process.env.ENV)],
      gasPrice: 3500000000,
    },
    bscTestnet: {
      url: rpc.BSC.testnet[0],
      accounts: [getPK(process.env.ENV)],
    },
    polygon: {
      url: rpc.POLYGON.mainnet[0],
      accounts: [getPK(process.env.ENV)],
      gasPrice: 100000000000,
    },
    mumbai: {
      url: rpc.POLYGON.testnet[0],
      accounts: [getPK(process.env.ENV)],
      gasPrice: 70000000000,
    },
    eth: {
      url: rpc.ETH.mainnet[0],
      accounts: [getPK(process.env.ENV)],
      gasPrice: 12000000000,
    },
    goerli: {
      url: rpc.ETH.goerli[0],
      accounts: [getPK(process.env.ENV)],
      gasPrice: 2985000000,
    },
    meldMainnet: {
      url: rpc.MELD.mainnet[0],
      accounts: [getPK(process.env.ENV)],
    },
    meldTestnet: {
      url: rpc.MELD.testnet[0],
      accounts: [getPK(process.env.ENV)],
    },
    skaleTestnet: {
      url: rpc.SKALE.testnet[0],
      accounts: [getPK(process.env.ENV)],
    },
    meldTestnet1: {
      url: rpc.MELD.testnet[0],
      accounts: [getPK(process.env.ENV)],
    },
    meldTestnet2: {
      url: rpc.MELD.testnet[0],
      accounts: [getPK(process.env.ENV)],
    },
    localnet: {
      url: rpc.ETH.localnet[0],
      accounts: [getPK(process.env.ENV)],
    },
  },
  etherscan: {
    apiKey: {
      polygon: API_KEY.polygon,
      polygonMumbai: API_KEY.polygon,
      bsc: API_KEY.bsc,
      bscTestnet: API_KEY.bsc,
      mainnet: API_KEY.eth,
      goerli: API_KEY.eth,
      // meldTestnet: API_KEY.meld,
    },
  },
};

export default config;
