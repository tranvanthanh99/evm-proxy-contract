import { ethers, upgrades } from "hardhat";
import { deployContract, deployContractUpgradeable } from "../../utils/contract";
import { SAVE_PATH } from "../../utils/constant";
import { TransparentCounter, UupsCounter } from "../../../typechain-types";

async function main() {
  const COUNTER = 1;
  const _UupsCounter = await deployContractUpgradeable<UupsCounter>(
    {
      name: "UupsCounter",
      args: [COUNTER],
      initializer: "initialize",
      kind: "uups",
    },
    SAVE_PATH,
    false
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
