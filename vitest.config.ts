import { vitePluginEvmts } from '@evmts/vite-plugin'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	test: {
		setupFiles: ['setupVitest.ts'],
	},
	plugins: [vitePluginEvmts()],
})
