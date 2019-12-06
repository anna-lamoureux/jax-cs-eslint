# jax-cs-eslint

A custom linting configuration for Angular projects to increase code style consistency across projects

## Features
*based on the [Airbnb JS Style Guide](https://github.com/airbnb/javascript), using the 
[base package](https://www.npmjs.com/package/eslint-config-airbnb-base)
*adds prettier support to include linting for HTML and CSS files
*uses the [typescript-eslint toolkit](https://github.com/typescript-eslint/typescript-eslint) to apply 
eslint rules to TS files
*adds a couple of extra custom rules

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
  "extends": "eslint-config-ns",
}
```
