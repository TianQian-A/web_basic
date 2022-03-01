import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
	return {
		plugins: [vue()],
		base: mode === "development" ? "./" : "/",
		server: {
			proxy: {
				"/api": {
					target: "http://localhost:3000",
					changeOrigin: true,
					pathRewrite: {
						"^/api": "",
					},
				},
			},
		},
	};
});
