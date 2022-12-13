import { ethers } from "hardhat";
import fs from "fs";
import { deployContract, deployMultiContract } from "../../utils/contract";
import { SAVE_PATH } from "../../utils/constant";
import { proxy } from "../../../typechain-types/@openzeppelin/contracts-upgradeable";
import { DelegateProxy } from "../../../typechain-types";

async function main() {
  const _RawCounter = await deployContract(
    {
      name: "RawCounter",
      args: [],
    },
    SAVE_PATH,
    false
  );
  const _DelegateProxy = await deployContract<DelegateProxy>(
    {
      name: "DelegateProxy",
      args: [_RawCounter.target],
    },
    SAVE_PATH,
    false
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
