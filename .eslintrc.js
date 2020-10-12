module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint", "react", "prettier"],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "prettier",
        "prettier/@typescript-eslint",
        "prettier/react",
    ],
    rules: {
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/no-unused-vars": "off",
    },
};
