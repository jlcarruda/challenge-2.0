module.exports = {
	"env": {
		"commonjs": true,
		"es6": true,
		"node": true
	},
	"extends": "eslint:recommended",
	"globals": {
		"Atomics": "readonly",
		"SharedArrayBuffer": "readonly"
	},
	"parserOptions": {
		"ecmaVersion": 2018
	},
	"rules": {
		"indent": ["warn", 2],
		"eqeqeq": ["warn", "always"],
		"quotes": ["warn", "double", { "allowTemplateLiterals": true }],
		"no-var": "error",
		"prefer-const": ["warn", {"destructuring": "all"}],
		"semi": ["warn", "always"],
		"no-undef": "warn",
		"linebreak-style": 0
	}
};