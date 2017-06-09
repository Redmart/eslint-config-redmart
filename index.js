module.exports = {
	rules: {
		'array-bracket-spacing': [2, 'never'],
		'arrow-parens': [2, 'as-needed'],
		'block-spacing': [2, 'always'],
		'brace-style': [2, '1tbs', { 'allowSingleLine': true }],
		'comma-spacing': [2, { 'before': false, 'after': true }],
		'complexity': 2,
		'curly': 2,
		'eol-last': 2,
		'eqeqeq': 2,
		'guard-for-in': 2,
		'indent': [2, 'tab', { 'SwitchCase': 1 }],
		'keyword-spacing': [2, { 'before': true, 'after': true }],
		'max-depth': [2, 3],
		'no-caller': 2,
		'no-cond-assign': 2,
		'no-constant-condition': 2,
		'no-empty': 2,
		'no-extra-semi': 2,
		'no-fallthrough': 2,
		'no-func-assign': 2,
		'no-global-assign': 2,
		'no-implicit-coercion': 2,
		'no-implicit-globals': 2,
		'no-invalid-regexp': 2,
		'no-magic-numbers': [2, { 'ignore': [-1, 0, 1, 2, 30, 60, 100, 1000], 'ignoreArrayIndexes': true }],
		'no-multiple-empty-lines': [2, { 'max': 1 }],
		'no-new': 2,
		'no-return-assign': 2,
		'no-sequences': 2,
		'no-spaced-func': 2,
		'no-trailing-spaces': 2,
		'no-undef': 2,
		'no-unreachable': 2,
		'no-unused-vars': 2,
		'quotes': [2, 'single', { 'avoidEscape': true, 'allowTemplateLiterals': true }],
		'space-before-blocks': 2,
		'space-before-function-paren': 2,
		'space-in-parens': [2, 'never'],
		'valid-jsdoc': [2, { 'requireReturn': false }],
		'vars-on-top': 2,
		'wrap-iife': [2, 'any']
	}
};