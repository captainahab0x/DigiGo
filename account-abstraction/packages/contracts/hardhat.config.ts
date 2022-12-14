import "@nomicfoundation/hardhat-toolbox";

import * as dotenv from "dotenv";
import { HardhatUserConfig } from "hardhat/config";

import { HARDHAT_CHAINID, TIMEOUT } from "./config";
import { getMnemonic } from "./lib/dev/mnemonic";
import { getNetworksUserConfigs } from "./lib/dev/network";
import networkJsonFile from "./network.json";
import { ChainId } from "./types/network";

dotenv.config();

const mnemonic = getMnemonic("../../mnemonic.txt");

const networksUserConfigs = getNetworksUserConfigs(mnemonic);

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: { enabled: true, runs: 1000000 },
      viaIR: true,
    },
  },
  networks: {
    hardhat: {
      chainId: 80001,
    },
    ...networksUserConfigs,
  },
  etherscan: {
    apiKey: {
      polygonMumbai: process.env.POLYGONSCAN_API || "",
    },
  },
  gasReporter: {
    enabled: process.env.IS_GAS_REPORTER_ENABLED === "true",
  },
  mocha: {
    timeout: TIMEOUT,
  },
};

export default config;
