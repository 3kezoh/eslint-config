const ERROR = 2;

module.exports = {
    plugins: ["simple-import-sort"],
    rules: {
        "simple-import-sort/exports": ERROR,
        "simple-import-sort/imports": [
            ERROR,
            {
                groups: [
                    [
                        // Side effect imports.
                        "^\\u0000",

                        /*
                         * Packages.
                         * Things that start with a letter (or digit or underscore), or `@` followed by a letter.
                         */
                        "^@?\\w",

                        /*
                         * Absolute imports and other imports.
                         * Anything not matched in another group.
                         */
                        "^",

                        /*
                         * Relative imports.
                         * Anything that starts with a dot.
                         */
                        "^\\.",
                    ],
                ],
            },
        ],
    },
};
