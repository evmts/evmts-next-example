import { beforeAll, describe, it } from "vitest";
import { WagmiMintExample } from "../src/contracts/WagmiMintExample.sol";
import { run } from "hardhat";
import { createPublicClient, createWalletClient, http, Address } from "viem";
import { hardhat } from "viem/chains";

export const publicClient = createPublicClient({
  chain: hardhat,
  transport: http(),
});

beforeAll(() => {
  run("node");
});

describe("WagmiMintExample", function () {
  it("Should deploy", async function () {
    const walletClient = createWalletClient({
      chain: hardhat,
      transport: http(),
    });
    const [account] = await walletClient.getAddresses();
    const hash = await walletClient.deployContract({
      abi: WagmiMintExample.abi,
      bytecode: WagmiMintExample.bytecode as `0x${string}`,
      account,
    });
  });
});
