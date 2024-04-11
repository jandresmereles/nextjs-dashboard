module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        //"eslint:recommended",
        //"next",
        //"plugin:@typescript-eslint/recommended",
        //'plugin:@next/next/recommended',
        //"plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "react"
    ],
    "rules": {
        "react/react-in-jsx-scope": "off",
        "react/jsx-uses-react": "off",
        "react/no-unescaped-entities": "off",
        "@next/next/no-page-custom-font": "off",
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "off"
    }
}
