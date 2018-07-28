module.exports = {
    "extends": [
        "airbnb",
        "prettier",
        "prettier/react"
    ],
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "env":{
        "jest": true,
        "browser": true,
    },
    "rules": {
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "prettier/prettier": [
            "error",
            {
                "trailingComma":"es5",
                "singleQuote": true,
                "printWidth": 120
            }
        ],
    },
    "plugins": [
        "prettier"
    ]
};