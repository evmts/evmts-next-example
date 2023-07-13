import { WagmiMintExample } from '../contracts/WagmiMintExample.sol'
import { Address, useAccount, useChainId, useContractRead, useNetwork } from 'wagmi'
import { SupportedChainIds } from '../wagmi'

export const WagmiReads = () => {
	// in future versian of evmts this will work without casting to string
	const chainId = String(useChainId()) as SupportedChainIds

	const { address, isConnected } = useAccount()

	const { data: balance } = useContractRead({
		/**
		 * Spreading in a method will spread abi, address and args
		 * Hover over balanceOf and click go-to-definition should take you to the method definition in solidity if compiling from solidity
		 */
		...WagmiMintExample.read({ chainId }).balanceOf(address as Address),
		enabled: isConnected,
	})
	const { data: totalSupply } = useContractRead({
		...WagmiMintExample.read({ chainId }).totalSupply(),
		enabled: isConnected,
	})
	const { data: tokenUri } = useContractRead({
		...WagmiMintExample.read({ chainId }).tokenURI(BigInt(1)),
		enabled: isConnected,
	})
	const { data: symbol } = useContractRead({
		...WagmiMintExample.read({ chainId }).symbol(),
		enabled: isConnected,
	})
	const { data: ownerOf } = useContractRead({
		...WagmiMintExample.read({ chainId }).ownerOf(BigInt(1)),
		enabled: isConnected,
	})
	return (
		<div>
			<div>
				<div>
					balanceOf({address}): {balance?.toString()}
				</div>
				<div>totalSupply(): {totalSupply?.toString()}</div>
				<div>tokenUri(BigInt(1)): {tokenUri?.toString()}</div>
				<div>symbol(): {symbol?.toString()}</div>
				<div>ownerOf(BigInt(1)): {ownerOf?.toString()}</div>
			</div>
		</div>
	)
}
