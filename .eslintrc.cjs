module.exports = {
	root: true,
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:import/typescript',
		'plugin:svelte/recommended',
		'prettier'
	],
	parser: '@typescript-eslint/parser',
	plugins: ['import', '@typescript-eslint'],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		extraFileExtensions: ['.svelte'],
		warnOnUnsupportedTypeScriptVersion: true
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	overrides: [
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser'
			}
		}
	],
	rules: {
		'import/newline-after-import': ['error', { count: 1 }],
		'import/no-unresolved': ['error', { ignore: ['\\$app/', '\\$env/', '\\$lib/'] }],
		'import/order': [
			'warn',
			{
				'newlines-between': 'always',
				alphabetize: {
					order: 'asc',
					caseInsensitive: true
				}
			}
		]
	},
	settings: {
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts']
		},
		'import/resolver': {
			typescript: {
				alwaysTryTypes: true
			}
		}
	}
};
