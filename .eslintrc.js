module.exports = {
    "env": {
        "browser": true,
        "jquery": true,
        "commonjs": true,
        "es2022": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 13
    },
    "rules": {
        "indent": [
            "error",
            3,
            { "SwitchCase": 2 }
        ], 
        "quates": [
            "error", 
            "double"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-unused-vars": [
            "error",
            {
                "vars": "all",
                "args": "none",
            }
        ],
        "no-console": [
            "off"
        ]
    }
};
