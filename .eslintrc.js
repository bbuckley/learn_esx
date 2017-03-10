module.exports = {
    "env": {
        "es6": true
    },
    // "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "comma-dangle": "off",//["error", "never"],
        "semi": "off" //["warn","never"]//"off" //["error", "always"]
      }
     //"rules": {
        // "indent": [2, 2],
        // "linebreak-style": [
        //     "error",
        //     "unix"
        // ],
        // "quotes": [
        //     "error",
        //     "double"
        // ],
        // "semi": [
        //     "error",
        //     "never"
        // ]
  //  }
};

// module.exports = {
//   "extends": "eslint:recommended",
//   "ecmaFeatures": {
//     "jsx": true,
//     "modules": true,
//     "es6": true
//   },
//   "globals": {
//     "__DEV__": false,
//     "__PRODUCTION__": false
//   },
//   "env": {
//     "browser": true,
//     "node": true,
//     "es6": true
//   },
//   // "parser": "babel-eslint",
//   "rules": {
//     "quotes": [2, "single"],
//     "strict": [2, "never"],
//     "react/jsx-uses-react": 2,
//     "react/jsx-uses-vars": 2,
//     "react/react-in-jsx-scope": 2,
//     "global-strict": 0,
//     "no-unused-vars": [2, {"vars": "all", "args": "none"}],
//     "no-unused-expressions": [2, { allowShortCircuit: true, allowTernary: true }],
//     "semi": [2, "always"],
//     "no-console": [1],
//     "no-constant-condition": [1]
//   },
//   "plugins": [
//     "react"
//   ]
// }
