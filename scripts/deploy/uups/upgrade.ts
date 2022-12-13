import { ethers, upgrades } from "hardhat";
import { getContractAddress } from "../../utils/helper";
import { SAVE_PATH } from "../../utils/constant";
import { saveContract } from "../../utils/contract";


async function main() {
  const proxyAddress = await getContractAddress("UupsCounter", SAVE_PATH);
  const CounterV2 = await ethers.getContractFactory("UupsCounter");

  await upgrades.upgradeProxy(proxyAddress, CounterV2);
  const implementationAddress = await upgrades.erc1967.getImplementationAddress(proxyAddress as string);

  await saveContract(SAVE_PATH, JSON.stringify({ TransparentCounterImplementation: implementationAddress }));
  console.log("Proxy upgraded");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });