module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: ["plugin:vue/vue3-essential", "eslint:recommended", "prettier", "@vue/prettier"],
	plugins: ["prettier"],

	parserOptions: {
		parser: "@babel/eslint-parser",
		requireConfigFile: false,
		ecmaVersion: 2020,
	},
	rules: {
		"prettier/prettier": [
			"error",
			{
				useTabs: true,
				indent: "tab",
				tabWidth: 2,
				printWidth: 100,
				htmlWhitespaceSensitivity: "ignore",
			},
		],
		"arrow-body-style": "off",
		"prefer-arrow-callback": "off",
		indent: "off",
	},
	globals: {
		defineProps: "readonly",
	},
};
