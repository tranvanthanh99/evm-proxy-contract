import { ethers, upgrades } from "hardhat";
import { deployContract, deployContractUpgradeable } from "../../utils/contract";
import { SAVE_PATH } from "../../utils/constant";
import { TransparentCounter } from "../../../typechain-types";

async function main() {
  const COUNTER = 1;
  const _TransparentCounter = await deployContractUpgradeable<TransparentCounter>(
    {
      name: "TransparentCounter",
      args: [COUNTER],
      initializer: "__Counter_init",
      kind: "transparent",
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
