/* eslint-disable camelcase */
import { EntryPoint__factory } from "@account-abstraction/contracts";
import fs from "fs";
import { ethers } from "hardhat";
import path from "path";

import { PAYMASTER_STAKE, UNSTAKE_DELAY_SEC } from "../config";
import { DeterministicDeployer } from "../lib/infinitism/DeterministicDeployer";
import { DigiGoWalletDeployer__factory, EIP4337Manager__factory, MockPayment__factory } from "../typechain-types";

async function main() {
  const [signer] = await ethers.getSigners();
  console.log("signer", signer.address);

  const entryPointCreationArgument = ethers.utils.defaultAbiCoder.encode(
    ["uint256", "uint256"],
    [PAYMASTER_STAKE, UNSTAKE_DELAY_SEC]
  );
  const entryPointCreationCode = ethers.utils.solidityPack(
    ["bytes", "bytes"],
    [EntryPoint__factory.bytecode, entryPointCreationArgument]
  );
  const entryPointAddress = await DeterministicDeployer.deploy(entryPointCreationCode);

  const accountAbstractionModuleCreationArgument = ethers.utils.defaultAbiCoder.encode(
    ["address"],
    [entryPointAddress]
  );
  const accountAbstractionModuleCreationCode = ethers.utils.solidityPack(
    ["bytes", "bytes"],
    [EIP4337Manager__factory.bytecode, accountAbstractionModuleCreationArgument]
  );
  const accountAbstractionModuleAddress = await DeterministicDeployer.deploy(accountAbstractionModuleCreationCode);

  const factoryAddress = await DeterministicDeployer.deploy(DigiGoWalletDeployer__factory.bytecode);

  const mockPaymentAddress = await DeterministicDeployer.deploy(MockPayment__factory.bytecode);

  const result = {
    entryPoint: entryPointAddress,
    accountAbstractionModule: accountAbstractionModuleAddress,
    factory: factoryAddress,
    mockPayment: mockPaymentAddress,
  };
  fs.writeFileSync(path.join(__dirname, `../deployments.json`), JSON.stringify(result));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
