module.exports = {
  "root": true,
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "ecmaFeatures": {
        "jsx": true,
        "experimentalObjectRestSpread": true
      }
  },
  "extends": [ 
    "airbnb-base",
    "plugin:react/recommended",
    "eslint:recommended"
  ],
  "plugins": [ "react", "jsx-a11y", "babel" ],
  "env": {
    "browser": true,
    "node": true,
    "commonjs": true,
    "es6": true,
    "jest": true
  },
  "rules": {
    "no-debugger": process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "jsx-a11y/no-static-element-interactions": 0,
    "react/self-closing-comp": 0,
    "react/jsx-no-bind": 0,
    "react/jsx-curly-spacing": 0,
    "react/no-string-refs": 0,
    "react/jsx-closing-bracket-location": 0,
    "react/jsx-boolean-value": 0,
    "react/no-did-mount-set-state": 1,
    "react/jsx-first-prop-new-line": 0,
    "react/jsx-max-props-per-line": 0,
    "react/require-default-props": 0,
    "jsx-a11y/img-has-alt": 0,
    "jsx-a11y/label-has-for": 0,
    "jsx-a11y/no-noninteractive-element-interactions": 0,
    "import/no-named-as-default-member": 0,
    "import/prefer-default-export": 0,
    "import/no-extraneous-dependencies": [1, {"devDependencies": ["**/__test__/**/*.js", "**/__test__/**/*.jsx", "**/*_test.jsx", "**/*_test.js"]}],
    "no-empty": 1,
    "no-console": 1,
    "react/sort-comp": 0,
    "react/prefer-stateless-function": 0,
    "react/prop-types": [1, { "ignore": ["children", "key"] }],
    "react/no-find-dom-node": 0,
    "react/no-unused-prop-types": 1,
    "react/forbid-prop-types": [1, { "forbid": ["array"] }],
    "react/no-array-index-key": 0
  },
  "settings": {
    "react": {
      "createClass": "createReactClass",
      "pragma": "React",
      "version": "16.0"
    },
    "propWrapperFunctions": ["forbidExtraProps"]
  }
}
