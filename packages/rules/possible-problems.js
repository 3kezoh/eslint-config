/**
 * This config deals only with the possible problems rules.
 * See https://eslint.org/docs/latest/rules/#possible-problems
 */

"use strict";

const ERROR = 2;

module.exports = {
    rules: {
    // Enforce return statements in callbacks of array methods
        "array-callback-return": [ERROR, { checkForEach: false }],

        // Require `super()` calls in constructors
        "constructor-super": ERROR,

        // Enforce "for" loop update clause moving the counter in the right direction
        "for-direction": ERROR,

        // Enforce `return` statements in getters
        "getter-return": ERROR,

        // Disallow using an async function as a Promise executor
        "no-async-promise-executor": ERROR,

        // Disallow `await` inside of loops
        "no-await-in-loop": ERROR,

        // Disallow reassigning class members
        "no-class-assign": ERROR,

        // Disallow comparing against -0
        "no-compare-neg-zero": ERROR,

        // Disallow assignment operators in conditional expressions
        "no-cond-assign": [ERROR, "always"],

        // Disallow reassigning `const` variables
        "no-const-assign": ERROR,

        // Disallow expressions where the operation doesn't affect the value
        "no-constant-binary-expression": ERROR,

        // Disallow constant expressions in conditions
        "no-constant-condition": ERROR,

        // Disallow returning value from constructor
        "no-constructor-return": ERROR,

        // Disallow control characters in regular expressions
        "no-control-regex": ERROR,

        // Disallow the use of `debugger`
        "no-debugger": ERROR,

        // Disallow duplicate arguments in `function` definitions
        "no-dupe-args": ERROR,

        // Disallow duplicate class members
        "no-dupe-class-members": ERROR,

        // Disallow duplicate conditions in if-else-if chains
        "no-dupe-else-if": ERROR,

        // Disallow duplicate keys in object literals
        "no-dupe-keys": ERROR,

        // Disallow duplicate case labels
        "no-duplicate-case": ERROR,

        // Disallow duplicate module imports
        "no-duplicate-imports": ERROR,

        // Disallow empty character classes in regular expressions
        "no-empty-character-class": ERROR,

        // Disallow empty destructuring patterns
        "no-empty-pattern": ERROR,

        // Disallow reassigning exceptions in `catch` clauses
        "no-ex-assign": ERROR,

        // Disallow fallthrough of `case` statements
        "no-fallthrough": ERROR,

        // Disallow reassigning `function` declarations
        "no-func-assign": ERROR,

        // Disallow assigning to imported bindings
        "no-import-assign": ERROR,

        // Disallow variable or `function` declarations in nested blocks
        "no-inner-declarations": [ERROR, "both"],

        // Disallow invalid regular expression strings in `RegExp` constructors
        "no-invalid-regexp": ERROR,

        // Disallow irregular whitespace
        "no-irregular-whitespace": ERROR,

        // Disallow literal numbers that lose precision
        "no-loss-of-precision": ERROR,

        // Disallow characters which are made with multiple code points in character class syntax
        "no-misleading-character-class": ERROR,

        // Disallow `new` operators with global non-constructor functions
        "no-new-native-nonconstructor": ERROR,

        // Disallow `new` operators with the `Symbol` object
        "no-new-symbol": ERROR,

        // Disallow calling global object properties as functions
        "no-obj-calls": ERROR,

        // Disallow returning values from Promise executor functions
        "no-promise-executor-return": ERROR,

        // Disallow calling some `Object.prototype` methods directly on objects
        "no-prototype-builtins": ERROR,

        // Disallow assignments where both sides are exactly the same
        "no-self-assign": ERROR,

        // Disallow comparisons where both sides are exactly the same
        "no-self-compare": ERROR,

        // Disallow returning values from setters
        "no-setter-return": ERROR,

        // Disallow sparse arrays
        "no-sparse-arrays": ERROR,

        // Disallow template literal placeholder syntax in regular strings
        "no-template-curly-in-string": ERROR,

        // Disallow `this`/`super` before calling `super()` in constructors
        "no-this-before-super": ERROR,

        // Disallow the use of undeclared variables unless mentioned in `/*global */` comments
        "no-undef": ERROR,

        // Disallow confusing multiline expressions
        "no-unexpected-multiline": ERROR,

        // Disallow unmodified loop conditions
        "no-unmodified-loop-condition": ERROR,

        // Disallow unreachable code after `return`, `throw`, `continue`, and `break` statements
        "no-unreachable": ERROR,

        // Disallow loops with a body that allows only one iteration
        "no-unreachable-loop": ERROR,

        // Disallow control flow statements in `finally` blocks
        "no-unsafe-finally": ERROR,

        // Disallow negating the left operand of relational operators
        "no-unsafe-negation": ERROR,

        // Disallow use of optional chaining in contexts where the `undefined` value is not allowed
        "no-unsafe-optional-chaining": ERROR,

        // Disallow unused private class members
        "no-unused-private-class-members": ERROR,

        // Disallow unused variables
        "no-unused-vars": [
            ERROR,
            {
                args: "after-used",
                ignoreRestSiblings: true,
                vars: "all",
            },
        ],

        // Disallow the use of variables before they are defined
        "no-use-before-define": [
            ERROR,
            {
                classes: false,
                functions: false,
                variables: false,
            },
        ],

        // Disallow useless backreferences in regular expressions
        "no-useless-backreference": ERROR,

        // Disallow assignments that can lead to race conditions due to usage of `await` or `yield`
        "require-atomic-updates": ERROR,

        // Require calls to `isNaN()` when checking for `NaN`
        "use-isnan": ERROR,

        // Enforce comparing `typeof` expressions against valid strings
        "valid-typeof": ERROR,
    },
};
