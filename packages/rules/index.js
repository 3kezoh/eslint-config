/**
 * This config deals only with the layout and formatting rules.
 * See https://eslint.org/docs/latest/rules/#layout--formatting
 */

"use strict";

const ERROR = 2;
const INDENT_SIZE = 2;

module.exports = {
  env: {
    es2022: true,
  },
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
    "comma-spacing": [ERROR, { before: false, after: true }],

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
    "indent": [ERROR, INDENT_SIZE, { SwitchCase: 1 }],

    // Enforce the consistent use of either double or single quotes in JSX attributes
    "jsx-quotes": [ERROR, "prefer-double"],

    // Enforce consistent spacing between keys and values in object literal properties
    "key-spacing": [ERROR, { beforeColon: false, afterColon: true, mode: "strict" }],

    // Enforce consistent spacing before and after keywords
    "keyword-spacing": [ERROR, { before: true, after: true }],

    // Enforce position of line comments
    "line-comment-position": [ERROR, { position: "above" }],

    // Enforce consistent linebreak style
    "linebreak-style": [ERROR, "unix"],

    // Require empty lines around comments
    "lines-around-comment": [ERROR, { beforeBlockComment: true, afterBlockComment: false, beforeLineComment: true, afterLineComment: false, allowBlockStart: true, allowBlockEnd: false, allowObjectStart: true, allowObjectEnd: false, allowArrayStart: true, allowArrayEnd: false }],

    // Require or disallow an empty line between class members
    "lines-between-class-members": [ERROR, "always", { exceptAfterSingleLine: true }],

    // Enforce a maximum line length
    "max-len": [ERROR, { code: 80, tabWidth: INDENT_SIZE, ignoreComments: true, ignoreUrls: true, ignoreStrings: true, ignoreTemplateLiterals: true, ignoreRegExpLiterals: true }],

    // Enforce a maximum numbers of statements allowed per line
    "max-statements-per-line": [ERROR, { max: 1 }],

    // Enforce newlines between operands of ternary expressions
    "multiline-ternary": [ERROR, "always-multiline"],

    // Enforce or disallow parentheses when invoking a constructor with no arguments
    "new-parens": [ERROR, "always"],

    // Require a newline after each call in a method chain
    "newline-per-chained-call": [ERROR, { ignoreChainWithDepth: 2 }],

    // Disallow unnecessary parentheses
    "no-extra-parens": [ERROR, "all", { nestedBinaryExpressions: false, enforceForArrowConditionals: false }],

    // Disallow mixed spaces and tabs for indentation
    "no-mixed-spaces-and-tabs": [ERROR, "smart-tabs"],

    // Disallow multiple spaces
    "no-multi-spaces": [ERROR, { ignoreEOLComments: false }],

    // Disallow multiple empty lines
    "no-multiple-empty-lines": [ERROR, { max: 1, maxEOF: 0, maxBOF: 0 }],

    // Disallow all tabs
    "no-tabs": ERROR,

    // Disallow trailing whitespace at the end of lines
    "no-trailing-spaces": ERROR,

    // Disallow whitespace before properties
    "no-whitespace-before-property": ERROR,

    // Enforce the location of single-line statements
    "nonblock-statement-body-position": [ERROR, "beside"],

    // Enforce consistent line breaks after opening and before closing braces
    "object-curly-newline": [ERROR, { multiline: true, consistent: true }],

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
      { blankLine: "always", prev: "*", next: "return" },

      // Require an empty line after variable declarations, but no between them
      { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
      { blankLine: "any", prev: ["const", "let", "var"], next: ["const", "let", "var"] },

      // Require an empty line before block statements
      { blankLine: "always", prev: "*", next: "block-like" },

      // Require an empty line before directives
      { blankLine: "always", prev: "directive", next: "*" },

      // Require an empty line after import statements
      { blankLine: "always", prev: "import", next: "*" },

      // Disallow an empty line between import statements
      { blankLine: "never", prev: "import", next: "import" },

      // Require an empty line after commonjs require statements
      { blankLine: "always", prev: "cjs-import", next: "*" },

      // Disallow an empty line between commonjs require statements
      { blankLine: "never", prev: "cjs-import", next: "cjs-import" },

      // Require an empty line before commonjs exports statements
      { blankLine: "always", prev: "*", next: "cjs-export" }],

    // Require quotes around object literal property names
    "quotes": [ERROR, "double", { avoidEscape: true, allowTemplateLiterals: false }],

    // Enforce spacing between rest and spread operators and their expressions
    "rest-spread-spacing": [ERROR, "never"],

    // Require or disallow semicolons instead of ASI
    "semi": [ERROR, "always"],

    // Enforce consistent spacing before and after semicolons
    "semi-spacing": [ERROR, { before: false, after: true }],

    // Enforce location of semicolons
    "semi-style": [ERROR, "last"],

    // Enforce consistent spacing before blocks
    "space-before-blocks": [ERROR, "always"],

    // Enforce consistent spacing before function definition opening parenthesis
    "space-before-function-paren": [ERROR, { anonymous: "always", named: "never", asyncArrow: "always" }],

    // Enforce consistent spacing inside parentheses
    "space-in-parens": [ERROR, "never"],

    // Require spacing around infix operators
    "space-infix-ops": ERROR,

    // Enforce consistent spacing before or after unary operators
    "space-unary-ops": [ERROR, { words: true, nonwords: false }],

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
