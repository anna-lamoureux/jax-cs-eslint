# eslint-config-jaxcs

A custom linting configuration for Angular projects to increase code style consistency across projects

## Features
* based on the [Airbnb JS Style Guide](https://github.com/airbnb/javascript), using the 
[base package](https://www.npmjs.com/package/eslint-config-airbnb-base)
* adds [Prettier](https://prettier.io/) support to include linting for HTML and CSS files
* uses the [typescript-eslint toolkit](https://github.com/typescript-eslint/typescript-eslint) to apply 
eslint rules to TS files
* adds a couple of extra custom rules

## Installation
Install the package
```sh
# With npm
npm install eslint-config-jaxcs --save-dev

# With yarn
yarn add eslint-config-jaxcs -D
```

Then make sure peer dependencies are installed
```sh
# With any npm version
npm info "eslint-config-jaxcs@latest" peerDependencies

# With npm version 5+
npx install-peerdeps --dev eslint-config-jaxcs

# With yarn
yarn add eslint-config-jaxcs -D --peer
```

## Usage
Now add the config to either your `package.json`:
```json
{
  "eslintConfig": {
    "extends": "eslint-config-jaxcs"
  }
}
```

to your `.eslintrc`:
```json
{
  "extends": "eslint-config-jaxcs"
}
```

or `.eslintrc.js`:
```js
module.exports = {
  "extends": "eslint-config-jaxcs",
}
```

#### NPM Command Scripts
You can now use ESLint or Prettier to lint your functional tests and/or application code. To make this a 
little easier, adding custom command scripts to your `package.json`. Here are some examples of commands:
```json
{
  "scripts": {
    "lint": "eslint . -f table --ext .ts; exit 0",
    "lint-e2e": "eslint ./e2e -f table --ext .ts; exit 0",
    "lint-app": "eslint ./src -f table --ext .ts,.html; exit 0",
    "lint-preview": "npm run lint-preview-e2e; npm run lint-preview-app",
    "lint-preview-e2e": "prettier -c './e2e/**/*.{ts,js,css,html}'; exit 0",
    "lint-preview-app": "prettier -c './src/**/*.{ts,js,css,html}'; exit 0",
    "fix-prettier": "npm run fix-prettier-e2e; npm run fix-prettier-app",
    "fix-prettier-e2e": "prettier --write './e2e/**/*.{ts,js,css,html}'; exit 0",
    "fix-prettier-app": "prettier --write './app/**/*.{ts,js,css,html}'; exit 0",
    "fix-eslint": "npm run fix-eslint-e2e; npm run fix-eslint-app",
    "fix-eslint-e2e": "eslint ./e2e -f table --ext .ts --fix; exit 0",
    "fix-eslint-app": "eslint ./src -f table --ext .ts,.html --fix; exit 0",
    "fix": "npm run fix-prettier; npm run fix-eslint",
    "fix-app": "npm run fix-prettier-app; npm run fix-eslint-app",
    "fix-e2e": "npm run fix-prettier-e2e; npm run fix-eslint-e2e"
  }
}
```

*Note: the commands containing `exit 0` prevent the npm command from appearing to fail if linting errors are found*
