import { WagmiMintExample } from '../../contracts/WagmiMintExample.sol'
import { Address, useAccount, useChainId, useContractRead } from 'wagmi'
import styles from './WagmiReads.module.css'

export const WagmiReads = () => {
	const chainId = useChainId()

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
	const { data: symbol } = useContractRead({
		...WagmiMintExample.read({ chainId }).symbol(),
		enabled: isConnected,
	})
	return (
		<div className={styles.container}>
			<div className={styles.infoItem}>
				<div className={styles.columnContainer}>
					<div className={styles.methodName}>client balanceOf(<span className={styles.highlight}>{address}</span>):</div>
					<div className={styles.methodValue}><span className={styles.highlight}>{balance?.toString()}</span></div>
				</div>
			</div>
			<div className={styles.infoItem}>
				<div className={styles.columnContainer}>
					<div className={styles.methodName}>totalSupply():</div>
					<div className={styles.methodValue}><span className={styles.highlight}>{totalSupply?.toString()}</span></div>
				</div>
			</div>
			<div className={styles.infoItem}>
				<div className={styles.columnContainer}>
					<div className={styles.methodName}>symbol():</div>
					<div className={styles.methodValue}><span className={styles.highlight}>{symbol?.toString()}</span></div>
				</div>
			</div>
		</div>
	);
}
