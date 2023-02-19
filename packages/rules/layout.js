/**
 * This config deals only with the layout and formatting rules.
 * See https://eslint.org/docs/latest/rules/#layout--formatting
 */

"use strict";

const ERROR = 2;
const INDENT_SIZE = 4;

module.exports = {
    rules: {
        // Enforce linebreaks after opening and before closing array brackets
        "array-bracket-newline": [ERROR, "consistent"],

        // Enforce consistent spacing inside array brackets
        "array-bracket-spacing": [ERROR, "never"],

        // Enforce line breaks after each array element
        "array-element-newline": [ERROR, "consistent"],

        // Require parentheses around arrow function arguments
        "arrow-parens": [ERROR, "always"],

        // Enforce consistent spacing before and after the arrow in arrow functions
        "arrow-spacing": ERROR,

        // Dissallow or enforce spaces inside of blocks after opening block and before closing block
        "block-spacing": [ERROR, "always"],

        // Enforce consistent brace style for blocks
        "brace-style": [ERROR, "1tbs"],

        // Require or disallow trailing commas
        "comma-dangle": [ERROR, "always-multiline"],

        // Enforce consistent spacing before and after commas
        "comma-spacing": [ERROR, { after: true, before: false }],

        // Enforce consistent comma style
        "comma-style": [ERROR, "last"],

        // Enforce consistent spacing inside computed property brackets
        "computed-property-spacing": [ERROR, "never"],

        // Enforce consistent newlines before and after dots
        "dot-location": [ERROR, "property"],

        // Require or disallow newline at the end of files
        "eol-last": [ERROR, "always"],

        // Require or disallow spacing between function identifiers and their invocations
        "func-call-spacing": [ERROR, "never"],

        // Enforce line breaks between arguments of a function call
        "function-call-argument-newline": [ERROR, "consistent"],

        // Enforce consistent line breaks inside function parentheses
        "function-paren-newline": [ERROR, "consistent"],

        // Enforce consistent spacing around * operators in generator functions
        "generator-star-spacing": [ERROR, "after"],

        // Enforce the location of arrow function bodies
        "implicit-arrow-linebreak": [ERROR, "beside"],

        // Enforce consistent indentation
        indent: [ERROR, INDENT_SIZE, { SwitchCase: 1 }],

        // Enforce the consistent use of either double or single quotes in JSX attributes
        "jsx-quotes": [ERROR, "prefer-double"],

        // Enforce consistent spacing between keys and values in object literal properties
        "key-spacing": [ERROR, {
            afterColon: true,
            beforeColon: false,
            mode: "strict",
        }],

        // Enforce consistent spacing before and after keywords
        "keyword-spacing": [ERROR, { after: true, before: true }],

        // Enforce position of line comments
        "line-comment-position": [ERROR, { position: "above" }],

        // Enforce consistent linebreak style
        "linebreak-style": [ERROR, "unix"],

        // Require empty lines around comments
        "lines-around-comment": [ERROR, {
            afterBlockComment: false,
            afterLineComment: false,
            allowArrayEnd: false,
            allowArrayStart: true,
            allowBlockEnd: false,
            allowBlockStart: true,
            allowObjectEnd: false,
            allowObjectStart: true,
            beforeBlockComment: true,
            beforeLineComment: true,
        }],

        // Require or disallow an empty line between class members
        "lines-between-class-members": [ERROR, "always", { exceptAfterSingleLine: true }],

        // Enforce a maximum line length
        "max-len": [ERROR, {
            code: 80,
            ignoreComments: true,
            ignoreRegExpLiterals: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
            ignoreUrls: true,
            tabWidth: INDENT_SIZE,
        }],

        // Enforce a maximum numbers of statements allowed per line
        "max-statements-per-line": [ERROR, { max: 1 }],

        // Enforce newlines between operands of ternary expressions
        "multiline-ternary": [ERROR, "always-multiline"],

        // Enforce or disallow parentheses when invoking a constructor with no arguments
        "new-parens": [ERROR, "always"],

        // Require a newline after each call in a method chain
        "newline-per-chained-call": [ERROR, { ignoreChainWithDepth: 2 }],

        // Disallow unnecessary parentheses
        "no-extra-parens": [ERROR, "all", {
            enforceForArrowConditionals: false,
            nestedBinaryExpressions: false,
        }],

        // Disallow mixed spaces and tabs for indentation
        "no-mixed-spaces-and-tabs": [ERROR, "smart-tabs"],

        // Disallow multiple spaces
        "no-multi-spaces": [ERROR, { ignoreEOLComments: false }],

        // Disallow multiple empty lines
        "no-multiple-empty-lines": [ERROR, {
            max: 1,
            maxBOF: 0,
            maxEOF: 0,
        }],

        // Disallow all tabs
        "no-tabs": ERROR,

        // Disallow trailing whitespace at the end of lines
        "no-trailing-spaces": ERROR,

        // Disallow whitespace before properties
        "no-whitespace-before-property": ERROR,

        // Enforce the location of single-line statements
        "nonblock-statement-body-position": [ERROR, "beside"],

        // Enforce consistent line breaks after opening and before closing braces
        "object-curly-newline": [ERROR, {
            consistent: true,
            multiline: true,
        }],

        // Enforce consistent spacing inside braces
        "object-curly-spacing": [ERROR, "always"],

        // Enforce placing object properties on separate lines
        "object-property-newline": [ERROR, { allowAllPropertiesOnSameLine: true }],

        // Enforce consistent linebreak style for operators
        "operator-linebreak": [ERROR, "after"],

        // Require or disallow padding within blocks
        "padded-blocks": [ERROR, "never"],

        // Require or disallow padding lines between statements
        "padding-line-between-statements": [ERROR,
            // Require an empty line before return statements
            {
                blankLine: "always",
                next: "return",
                prev: "*",
            },

            // Require an empty line after variable declarations, but no between them
            {
                blankLine: "always",
                next: "*",
                prev: ["const", "let", "var"],
            },
            {
                blankLine: "any",
                next: ["const", "let", "var"],
                prev: ["const", "let", "var"],
            },

            // Require an empty line before block statements
            {
                blankLine: "always",
                next: "block-like",
                prev: "*",
            },

            // Require an empty line before directives
            {
                blankLine: "always",
                next: "*",
                prev: "directive",
            },

            // Require an empty line after import statements
            {
                blankLine: "always",
                next: "*",
                prev: "import",
            },

            // Disallow an empty line between import statements
            {
                blankLine: "never",
                next: "import",
                prev: "import",
            },

            // Require an empty line after commonjs require statements
            {
                blankLine: "always",
                next: "*",
                prev: "cjs-import",
            },

            // Disallow an empty line between commonjs require statements
            {
                blankLine: "never",
                next: "cjs-import",
                prev: "cjs-import",
            },

            // Require an empty line before commonjs exports statements
            {
                blankLine: "always",
                next: "cjs-export",
                prev: "*",
            }],

        // Require quotes around object literal property names
        quotes: [ERROR, "double", {
            allowTemplateLiterals: false,
            avoidEscape: true,
        }],

        // Enforce spacing between rest and spread operators and their expressions
        "rest-spread-spacing": [ERROR, "never"],

        // Require or disallow semicolons instead of ASI
        semi: [ERROR, "always"],

        // Enforce consistent spacing before and after semicolons
        "semi-spacing": [ERROR, {
            after: true,
            before: false,
        }],

        // Enforce location of semicolons
        "semi-style": [ERROR, "last"],

        // Enforce consistent spacing before blocks
        "space-before-blocks": [ERROR, "always"],

        // Enforce consistent spacing before function definition opening parenthesis
        "space-before-function-paren": [ERROR, {
            anonymous: "always",
            asyncArrow: "always",
            named: "never",
        }],

        // Enforce consistent spacing inside parentheses
        "space-in-parens": [ERROR, "never"],

        // Require spacing around infix operators
        "space-infix-ops": ERROR,

        // Enforce consistent spacing before or after unary operators
        "space-unary-ops": [ERROR, {
            nonwords: false,
            words: true,
        }],

        // Enforce spacing around colons of switch statements
        "switch-colon-spacing": [ERROR, { after: true, before: false }],

        // Require or disalow spacing around embedded expressions of template strings
        "template-curly-spacing": [ERROR, "never"],

        // Require or disallow spacing between template tags and their literals
        "template-tag-spacing": [ERROR, "never"],

        // Require or disallow Unicode byte order mark (BOM)
        "unicode-bom": [ERROR, "never"],

        // Require parentheses around immediate `function` invocations
        "wrap-iife": [ERROR, "inside", { functionPrototypeMethods: false }],

        // Require parenthesis around regex literals
        "wrap-regex": ERROR,

        // Require or disallow spacing around the `*` in `yield*` expressions
        "yield-star-spacing": [ERROR, "after"],
    },
};
