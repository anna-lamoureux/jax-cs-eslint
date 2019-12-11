module.exports = {
  "env": {
    "browser": true,
    "node": true,
    "jasmine": true
  },
  "extends": [
    "airbnb-base", // base set of rules
    "plugin:@typescript-eslint/recommended",  // uses the recommended rules from the @typescript-eslint/eslint-plugin
    "prettier/@typescript-eslint",  // uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    "plugin:prettier/recommended",  // enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "tsconfig.json",
    "sourceType": "module",
  },
  "plugins": [
    "@typescript-eslint",
    "@typescript-eslint/tslint",
  ],
  "rules": {
    "@typescript-eslint/camelcase": [
      "error",
      {
        "properties": "never" // allow dictionary properties that may interface with python-based APIs
      },
    ],
    "@typescript-eslint/class-name-casing": "error",
    "@typescript-eslint/consistent-type-definitions": "error",
    "@typescript-eslint/explicit-member-accessibility": [
      "off",
      {
        "accessibility": "explicit"
      }
    ],
    "@typescript-eslint/member-delimiter-style": [
      2,
      {
        "multiline": {
          "delimiter": "semi",
          "requireLast": true
        },
        "singleline": {
          "delimiter": "semi",
          "requireLast": false
        }
      }
    ],
    "@typescript-eslint/member-ordering": "error",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-empty-interface": "error",
    "@typescript-eslint/no-explicit-any": "off", // allows the 'any' type
    "@typescript-eslint/no-inferrable-types": "error",
    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/no-non-null-assertion": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-useless-constructor": "error", // use this version of the rule since it makes accommodations for typescript
    "@typescript-eslint/prefer-function-type": "error",
    "@typescript-eslint/quotes": [
      "error",
      "single"
    ],
    "@typescript-eslint/semi": [
      "error",
      "always"
    ],
    "@typescript-eslint/type-annotation-spacing": "error",
    "@typescript-eslint/unified-signatures": "error",
    "arrow-body-style": "error",
    "camelcase": "off", // turn off this ESLint rule to use the typescript version (above)
    "capitalized-comments": "error",
    "class-methods-use-this": "warn", // warns when a method doesn't reference the class object to get data
    "constructor-super": "error",
    "curly": "error",
    "dot-notation": "warn",
    "eol-last": "error",
    "eqeqeq": [
      "error",
      "smart"
    ],
    "guard-for-in": "error",
    "id-blacklist": "off",
    "id-match": "off",
    "import/no-deprecated": "warn",
    "import/extensions": "off", // extensions in imports aren't necessary in most cases; if there are issues, runtime/compilation will find them
    "import/no-unresolved": "off", // turns off the unresolved error as unresolved imports should become apparent at runtime
    "import/prefer-default-export": "off",
    "max-classes-per-file": "warn", // sometimes this rule is okay to break, especially if classes are small and/or closely related
    "max-len": [
      "error",
      {
        "code": 120
      }
    ],
    "no-bitwise": "error",
    "no-caller": "error",
    "no-console": "error",
    "no-debugger": "error",
    "no-empty": "off",
    "no-eval": "error",
    "no-fallthrough": "error",
    "no-lonely-if": "off", // this rule appears to be a bit buggy; turning it off for now
    "no-new-wrappers": "error",
    "no-param-reassign": "off", // the fixes for this rule created redundant code statements
    "no-shadow": [
      "error",
      {
        "hoist": "all"
      }
    ],
    "no-throw-literal": "error",
    "no-trailing-spaces": "error",
    "no-undef-init": "error",
    "no-underscore-dangle": "error",
    "no-unused-expressions": [
      "error",
      {
        "allowTernary": true // expressions in ternary statements were flagged even though they're being used to determine boolean value
      }
    ],
    "no-unused-labels": "error",
    "no-useless-constructor": "off", // turns off the ESLint version of this rule
    "no-var": "error",
    "prefer-const": "error",
    "prefer-destructuring": "off", // this doesn't seem to be that helpful in most cases that it's flagged code
    "radix": "error",
    "spaced-comment": "error",
    "@typescript-eslint/tslint/config": [
      "error",
      {
        "rules": {
          "import-blacklist": [
            true,
            "rxjs/Rx"
          ],
          "import-spacing": true,
          "one-line": [
            true,
            "check-open-brace",
            "check-catch",
            "check-else",
            "check-whitespace"
          ],
          "whitespace": [
            true,
            "check-branch",
            "check-decl",
            "check-operator",
            "check-separator",
            "check-type"
          ]
        }
      }
    ],
    "prettier/prettier": [
      "error",
      {
        trailingComma: 'all',
        singleQuote: true,
        printWidth: 120,
        tabWidth: 2,
        bracketSpacing: true,
        endOfLine: "lf"
      }
    ]
  }
};
