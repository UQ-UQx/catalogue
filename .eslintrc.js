module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import",
    ],
    "env": {
        "browser": true,
        "jest": true,
    },
    "rules": {
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    }
};