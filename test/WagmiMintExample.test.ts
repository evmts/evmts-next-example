import { describe, expect, it } from "vitest";
import { WagmiMintExample } from '../contracts/WagmiMintExample.sol'

describe('vitest example', () => {
  it('should work', () => {
    expect(WagmiMintExample.read().ownerOf(BigInt(1))).toMatchInlineSnapshot(`
      {
        "abi": [
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256",
              },
            ],
            "name": "ownerOf",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address",
              },
            ],
            "stateMutability": "view",
            "type": "function",
          },
        ],
        "address": undefined,
        "args": [
          1n,
        ],
        "functionName": "ownerOf",
        "humanReadableAbi": [
          "function ownerOf(uint256 tokenId) view returns (address)",
        ],
      }
    `)
    expect(WagmiMintExample.write().mint(BigInt(1))).toMatchInlineSnapshot(`
      {
        "abi": [
          {
            "inputs": [],
            "name": "mint",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function",
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256",
              },
            ],
            "name": "mint",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function",
          },
        ],
        "address": undefined,
        "args": [
          1n,
        ],
        "functionName": "mint",
        "humanReadableAbi": [
          "function mint(uint256 tokenId)",
        ],
      }
    `)
    expect(WagmiMintExample.events().Transfer({})).toMatchInlineSnapshot(`
      {
        "abi": [
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address",
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address",
              },
              {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256",
              },
            ],
            "name": "Transfer",
            "type": "event",
          },
        ],
        "address": undefined,
        "eventName": "Transfer",
        "humanReadableAbi": [
          "event Transfer(address indexed from, address indexed to, uint256 indexed tokenId)",
        ],
      }
    `)
  })
})
