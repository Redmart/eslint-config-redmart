module.exports = {
	rules: {
		'react/forbid-prop-types': 2,
		'react/jsx-handler-names': [2, { 'eventHandlerPrefix': 'handle', 'eventHandlerPropPrefix': 'on' }],
		'react/jsx-key': 2,
		'react/jsx-no-bind': [2, { 'ignoreRefs': true, 'allowArrowFunctions': true }],
		'react/jsx-no-duplicate-props': 2,
		'react/jsx-pascal-case': [2, { 'allowAllCaps': true }],
		'react/jsx-uses-react': 2,
		'react/jsx-uses-vars': 2,
		'react/no-deprecated': 2,
		'react/no-direct-mutation-state': 2,
		'react/no-find-dom-node': 2,
		'react/no-is-mounted': 2,
		'react/no-string-refs': 2,
		'react/no-unescaped-entities': 2,
		'react/no-unknown-property': 2,
		'react/prefer-es6-class': 2,
		'react/prefer-stateless-function': 2,
		'react/prop-types': 2,
		'react/self-closing-comp': 2,
		'react/sort-comp': [2, { 'order': ['type-annotations', 'static-methods', 'lifecycle', '/^handle.+$/', 'everything-else', 'render'] }]
	}
};
