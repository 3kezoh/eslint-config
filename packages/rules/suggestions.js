/**
 * This config deals only with the suggestions rules.
 * See https://eslint.org/docs/latest/rules/#suggestions
 */

"use strict";

const ERROR = 2;
const OFF = 0;

const MAX_CLASSES_PER_FILE = 1;

const COMPLEXITY = 10;
const MAX_DEPTH = 4;
const MAX_LINES = 300;
const MAX_LINES_PER_FUNCTION = 50;
const MAX_NESTED_CALLBACKS = 10;
const MAX_PARAMS = 4;
const MAX_STATEMENTS = 5;

module.exports = {
    rules: {
        // Enforce getter and setter pairs in objects and classes
        "accessor-pairs": OFF,

        // Require braces around arrow function bodies
        "arrow-body-style": [ERROR, "as-needed"],

        // Enforce the use of variables within the scope they are defined
        "block-scoped-var": ERROR,

        // Enforce camelcase naming convention
        camelcase: [ERROR, {
            ignoreImports: false,
            properties: "always",
        }],

        // Enforce or disallow capitalization of the first letter of a comment
        "capitalized-comments": [ERROR, "always", {
            ignoreConsecutiveComments: true,
        }],

        // Enforce that class methods utilize `this`
        "class-methods-use-this": [ERROR, {
            enforceForClassFields: true,
        }],

        // Enforce a maximum cyclomatic complexity allowed in a program
        complexity: [ERROR, COMPLEXITY],

        // Require `return` statements to either always or never specify values
        "consistent-return": [ERROR, {
            treatUndefinedAsUnspecified: false,
        }],

        // Enforce consistent naming when capturing the current execution context
        "consistent-this": OFF,

        // Enforce consistent brace style for all control statements
        curly: [ERROR, "all"],

        // Require `default` cases in `switch` statements
        "default-case": [ERROR, {
            commentPattern: "^No default$",
        }],

        // Enforce default clauses in switch statements to be last
        "default-case-last": ERROR,

        // Enforce default parameters to be last
        "default-param-last": ERROR,

        // Enforce dot notation whenever possible
        "dot-notation": [ERROR, { allowKeywords: true }],

        // Require the use of `===` and `!==`
        eqeqeq: [ERROR, "always"],

        // Require function names to match the name of the variable or property to which they are assigned
        "func-name-matching": [
            ERROR, "always", {
                considerPropertyDescriptor: false,
                includeCommonJSModuleExports: false,
            },
        ],

        // Require or disallow named `function` expressions
        "func-names": [ERROR, "as-needed"],

        // Enforce the consistent use of either `function` declarations or expressions
        "func-style": [ERROR, "declaration", {
            allowArrowFunctions: true,
        }],

        // Require grouped accessor pairs in object literals and classes
        "grouped-accessor-pairs": [ERROR, "getBeforeSet"],

        // Require `for-in` loops to include an `if` statement
        "guard-for-in": ERROR,

        // Disallow specified identifiers
        "id-denylist": [ERROR, "err", "cb", "req", "res", "data"],

        // Enforce minimum and maximum identifier lengths
        "id-length": [ERROR, {
            max: 30,
            min: 2,
            properties: "always",
        }],

        // Require identifiers to match a specified regular expression
        "id-match": OFF,

        // Require or dissallow initialization in variable declarations
        "init-declarations": OFF,

        // Require or disallow logical assignment logical operator shorthand
        "logical-assignment-operators": OFF,

        // Enforce a maximum number of classes per file
        "max-classes-per-file": [ERROR, MAX_CLASSES_PER_FILE],

        // Enforce a maximum depth that blocks can be nested
        "max-depth": [ERROR, MAX_DEPTH],

        // Enforce a maximum number of lines per file
        "max-lines": [ERROR, {
            max: MAX_LINES,
            skipBlankLines: true,
            skipComments: true,
        }],

        // Enforce a maximum number of lines of code in a function
        "max-lines-per-function": [ERROR, {
            max: MAX_LINES_PER_FUNCTION,
            skipBlankLines: true,
            skipComments: true,
        }],

        // Enforce a maximum depth that callbacks can be nested
        "max-nested-callbacks": [ERROR, MAX_NESTED_CALLBACKS],

        // Enforce a maximum number of parameters in function definitions
        "max-params": [ERROR, MAX_PARAMS],

        // Enforce a maximum number of statements allowed in function blocks
        "max-statements": [ERROR, MAX_STATEMENTS],

        // Enforce a particular style for multiline comments
        "multiline-comment-style": [ERROR, "starred-block"],

        // Require constructor names to begin with a capital letter
        "new-cap": [ERROR, {
            capIsNew: true,
            newIsCap: true,
            properties: true,
        }],

        // Disallow the use of `alert`, `confirm`, and `prompt`
        "no-alert": ERROR,

        // Disallow `Array` constructors
        "no-array-constructor": ERROR,

        // Disallow bitwise operators
        "no-bitwise": ERROR,

        // Disallow the use of `arguments.caller` or `arguments.callee`
        "no-caller": ERROR,

        // Disallow lexical declarations in case clauses
        "no-case-declarations": ERROR,

        // Disallow arrow functions where they could be confused with comparisons
        "no-confusing-arrow": [ERROR, {
            allowParens: true,
            onlyOneSimpleParam: false,
        }],

        // Disallow the use of `console`
        "no-console": [ERROR, {
            allow: [
                "error",
                "warn",
            ],
        }],

        // Disallow `continue` statements
        "no-continue": ERROR,

        // Disallow deleting variables
        "no-delete-var": ERROR,

        // Disallow division operators explicitly at the beginning of regular expressions
        "no-div-regex": ERROR,

        // Disallow `else` blocks after `return` statements in `if` statements
        "no-else-return": [ERROR, {
            allowElseIf: true,
        }],

        // Disallow empty block statements
        "no-empty": [ERROR, {
            allowEmptyCatch: false,
        }],

        // Disallow empty functions
        "no-empty-function": ERROR,

        // Disallow empty static blocks
        "no-empty-static-block": ERROR,

        // Disallow `null` comparisons without type-checking operators
        "no-eq-null": ERROR,

        // Disallow the use of `eval()`
        "no-eval": ERROR,

        // Disallow extending native types
        "no-extend-native": ERROR,

        // Disallow unnecessary calls to `.bind()`
        "no-extra-bind": ERROR,

        // Disallow unnecessary boolean casts
        "no-extra-boolean-cast": ERROR,

        // Disallow unnecessary labels
        "no-extra-label": ERROR,

        // Disallow unnecessary semicolons
        "no-extra-semi": ERROR,

        // Disallow leading or trailing decimal points in numeric literals
        "no-floating-decimal": ERROR,

        // Disallow assignments to native objects or read-only global variables
        "no-global-assign": ERROR,

        // Disallow shorthand type conversions
        "no-implicit-coercion": [ERROR, {
            boolean: true,
            disallowTemplateShorthand: false,
            number: true,
            string: true,
        }],

        // Disallow variable and function declarations in the global scope
        "no-implicit-globals": [ERROR, {
            lexicalBindings: true,
        }],

        // Disallow the use of `eval()`-like methods
        "no-implied-eval": ERROR,

        // Disallow inline comments after code
        "no-inline-comments": ERROR,

        // Disallow `this` keywords outside of classes or class-like objects
        "no-invalid-this": [ERROR, {
            capIsConstructor: true,
        }],

        // Disallow the use of the `__iterator__` property
        "no-iterator": ERROR,

        // Disallow labels that share a name with a variable
        "no-label-var": ERROR,

        // Disallow labeled statements
        "no-labels": OFF,

        // Disallow unnecessary nested blocks
        "no-lone-blocks": ERROR,

        // Disallow `if` statements as the only statement in `else` blocks
        "no-lonely-if": ERROR,

        // Disallow function declarations and expressions inside loop statements
        "no-loop-func": ERROR,

        // Disallow magic numbers
        "no-magic-numbers": [ERROR, {
            detectObjects: false,
            enforceConst: true,
            ignoreArrayIndexes: false,
            ignoreClassFieldInitialValues: true,
            ignoreDefaultValues: true,
        }],

        // Disallow mixed binary operators
        "no-mixed-operators": ERROR,

        // Disallow use of chained assignment expressions
        "no-multi-assign": ERROR,

        // Disallow multiline strings
        "no-multi-str": ERROR,

        // Disallow negated conditions
        "no-negated-condition": ERROR,

        // Disallow nested ternary expressions
        "no-nested-ternary": ERROR,

        // Disallow `new` operators outside of assignments or comparisons
        "no-new": ERROR,

        // Disallow `new` operators with the `Function` object
        "no-new-func": ERROR,

        // Disallow `new` operators with the `Object` object
        "no-new-object": ERROR,

        // Disallow `new` operators with the `String`, `Number`, and `Boolean` objects
        "no-new-wrappers": ERROR,

        // Disallow  `\8` and `\9` escape sequences in string literals
        "no-nonoctal-decimal-escape": ERROR,

        // Disallow octal literals
        "no-octal": ERROR,

        // Disallow octal escape sequences in string literals
        "no-octal-escape": ERROR,

        // Disallow reassigning `function` parameters
        "no-param-reassign": ERROR,

        // DIsallow the unary operators `++` and `--`
        "no-plusplus": [ERROR, {
            allowForLoopAfterthoughts: true,
        }],

        // Disallow the use of the `__proto__` property
        "no-proto": ERROR,

        // Disallow variable redeclaration
        "no-redeclare": ERROR,

        // Disallow multiple spaces in regular expressions
        "no-regex-spaces": ERROR,

        // Disallow specified names in exports
        "no-restricted-exports": OFF,

        // Disallow specified global variables
        "no-restricted-globals": OFF,

        // Disallow certain properties on certain objects
        "no-restricted-properties": OFF,

        // Disallow specified syntax
        "no-restricted-syntax": OFF,

        // Disallow assignment operators in `return` statements
        "no-return-assign": [ERROR, "always"],

        // Disallow unnecessary `return await`
        "no-return-await": ERROR,

        // Disallow `javascript:` urls
        "no-script-url": ERROR,

        // Disallow comma operators
        "no-sequences": ERROR,

        // Disallow variable declarations from shadowing variables declared in the outer scope
        "no-shadow": [ERROR, {
            builtinGlobals: true,
            hoist: "functions",
        }],

        // Disallow identifiers from shadowing restricted names
        "no-shadow-restricted-names": ERROR,

        // Disallow ternary operators
        "no-ternary": OFF,

        // Disalllow throwing literals as exceptions
        "no-throw-literal": ERROR,

        // Disallow initializing variables to `undefined`
        "no-undef-init": ERROR,

        // Disallow the use of `undefined` as an identifier
        "no-undefined": ERROR,

        // Disallow dangling underscores in identifiers
        "no-underscore-dangle": ERROR,

        // Disallow ternary operators when simpler alternatives exist
        "no-unneeded-ternary": ERROR,

        // Disallow unused expressions
        "no-unused-expressions": ERROR,

        // Disallow unused labels
        "no-unused-labels": ERROR,

        // Disallow unnecessary calls to `.call()` and `.apply()`
        "no-useless-call": ERROR,

        // Disallow unnecessary `catch` clauses
        "no-useless-catch": ERROR,

        // Disallow unnecessary computed property keys in object literals
        "no-useless-computed-key": ERROR,

        // Disallow unnecessary concatenation of literals or template literals
        "no-useless-concat": ERROR,

        // Disallow unnecessary constructors
        "no-useless-constructor": ERROR,

        // Disallow unnecessary escape characters
        "no-useless-escape": ERROR,

        // Disallow renaming import, export, and destructured assignments to the same name
        "no-useless-rename": ERROR,

        // Disallow redundant return statements
        "no-useless-return": ERROR,

        // Require `let` or `const` instead of `var`
        "no-var": ERROR,

        // Disallow `void` operators
        "no-void": ERROR,

        // Disallow specified warning terms in comments
        "no-warning-comments": ERROR,

        // Disallow `with` statements
        "no-with": ERROR,

        // Require or disallow method and property shorthand syntax for object literals
        "object-shorthand": [ERROR, "always", {
            avoidQuotes: true,
        }],

        // Enforce variables to be declared either together or separately in functions
        "one-var": [ERROR, "never"],

        // Require or disallow newlines around variable declarations
        "one-var-declaration-per-line": [ERROR, "always"],

        // Require or disallow assignment operator shorthand where possible
        "operator-assignment": [ERROR, "always"],

        // Require using arrow functions for callbacks
        "prefer-arrow-callback": [ERROR, {
            allowNamedFunctions: false,
            allowUnboundThis: true,
        }],

        // Require `const` declarations for variables that are never reassigned after declared
        "prefer-const": [ERROR, {
            destructuring: "any",
        }],

        // Require destructuring from arrays and/or objects
        "prefer-destructuring": [ERROR, {
            array: false,
            object: true,
        }],

        // Disallow the use of `Math.pow` in favor of the `**` operator
        "prefer-exponentiation-operator": ERROR,

        // Require using named capture group in regular expression
        "prefer-named-capture-group": OFF,

        // Disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexadecimal literals
        "prefer-numeric-literals": ERROR,

        // Disallow use of Object.prototype.hasOwnProperty.call() and prefer use of Object.hasOwn()
        "prefer-object-has-own": ERROR,

        // Disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead
        "prefer-object-spread": ERROR,

        // Require using Error objects as Promise rejection reasons
        "prefer-promise-reject-errors": [ERROR, {
            allowEmptyReject: false,
        }],

        // Disallow use of the `RegExp` constructor in favor of regular expression literals
        "prefer-regex-literals": ERROR,

        // Require rest parameters instead of `arguments`
        "prefer-rest-params": ERROR,

        // Require spread operators instead of `.apply()`
        "prefer-spread": ERROR,

        // Require template literals instead of string concatenation
        "prefer-template": OFF,

        // Require quotes around object literal property names
        "quote-props": [ERROR, "as-needed", {
            keywords: false,
            numbers: false,
            unnecessary: true,
        }],

        // Enforce the consistent use of the radix argument when using parseInt()
        radix: ERROR,

        // Disallow async functions which have no `await` expression
        "require-await": ERROR,

        // Enforce the use of `u` flag on RegExp
        "require-unicode-regexp": ERROR,

        // Require generator functions to contain `yield`
        "require-yield": ERROR,

        // Enforce sorted import declarations within modules
        "sort-imports": [ERROR, {
            allowSeparatedGroups: false,
            ignoreCase: false,
            ignoreDeclarationSort: false,
            ignoreMemberSort: false,
            memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
        }],

        // Require object keys to be sorted
        "sort-keys": [ERROR, "asc", {
            caseSensitive: true,
            natural: false,
        }],

        // Require variables within the same declaration block to be sorted
        "sort-vars": OFF,

        // Require or disallow a space immediately following the `//` or `/*` in a comment
        "spaced-comment": [ERROR, "always", {
            block: {
                balanced: true,
                exceptions: ["*"],
            },
            line: {
                exceptions: ["-", "+"],
            },
        }],

        // Require or disallow strict mode directives
        strict: OFF,

        // Require symbol descriptions
        "symbol-description": ERROR,

        // Require `var` declarations be placed at the top of their containing scope
        "vars-on-top": ERROR,

        // Require or disallow Yoda conditions
        yoda: [ERROR, "never"],
    },
};
