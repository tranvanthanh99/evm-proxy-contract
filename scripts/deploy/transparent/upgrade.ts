import { ethers, upgrades } from "hardhat";
import { getContractAddress } from "../../utils/helper";
import { SAVE_PATH } from "../../utils/constant";
import { saveContract } from "../../utils/contract";

async function main() {
  const proxyAddress = await getContractAddress("TransparentCounter", SAVE_PATH);
  const CounterV2 = await ethers.getContractFactory("TransparentCounter");

  await upgrades.upgradeProxy(proxyAddress, CounterV2);
  const implementationAddress = await upgrades.erc1967.getImplementationAddress(proxyAddress as string);

  await saveContract(SAVE_PATH, JSON.stringify({ TransparentCounterImplementation: implementationAddress }));
  console.log("Proxy upgraded");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
