import { beforeAll, describe, it, expect } from "vitest";
import { WagmiMintExample } from '../src/contracts/WagmiMintExample.sol'
import { run } from "hardhat";
import { createPublicClient, createWalletClient, http, Address } from "viem";
import { hardhat } from "viem/chains";

import { abi, bytecode } from "../out/WagmiMintExample.sol/WagmiMintExample.json";

export const publicClient = createPublicClient({
  chain: hardhat,
  transport: http(),
});

export const walletClient = createWalletClient({
  chain: hardhat,
  transport: http(),
});

beforeAll(() => {
  run("node");

});

describe("WagmiMintExample", function () {
  it("Should return run correct function parameters on hardhat", async function () {
    console.log(await publicClient.getBlockNumber());
    const accounts = await walletClient.getAddresses();
    const [account, ...other] = accounts;
    const hash = await walletClient.deployContract({
      abi: abi,
      bytecode: bytecode.object as `0x${string}`,
      account: accounts[0],
      args: [],
    });
    const receipt = await publicClient.waitForTransactionReceipt({ hash });
    console.log(receipt.contractAddress);
    console.log(WagmiMintExample.read({ chainId: `${hardhat.id}` }).balanceOf(
      `0x0000000000FFe8B47B3e2130213B802212439497` as Address))
  });
});
