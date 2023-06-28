# 0x01. ES6 Promises

### Editors
Some editors you can use are `vi`, `vim`, `emacs`, `Visual Studio Code`.

### Setup
Install NodeJS 12.11.X (in your home directory):
```
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```

Confirm the versions installed:
```
$ node -v
v12.11.1
$ npm -v
6.11.3
```

Install Jest, Babel, and ESLint (in your project directory):
```
Install Jest using: npm install --save-dev jest
Install Babel using: npm install --save-dev babel-jest @babel/core @babel/preset-env @babel/cli
Install ESLint using: npm install --save-dev eslint
```

### Configuration Files
`package.json`
```
{
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "dev": "npx babel-node",
    "test": "jest",
    "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
  },
  "devDependencies": {
    "@babel/core": "^7.6.0",
    "@babel/node": "^7.8.0",
    "@babel/preset-env": "^7.6.0",
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "jest": "^24.9.0"
  }
}
```

`babel.config.js`
```
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
```

`utils.js`
Note: this is `not a library you need to `install`, just create the file and apply these content
```
export function uploadPhoto() {
  return Promise.resolve({
    status: 200,
    body: 'photo-profile-1',
  });
}


export function createUser() {
  return Promise.resolve({
    firstName: 'Guillaume',
    lastName: 'Salva',
  });
}
```
Response Data Format
`uploadPhoto` returns a response with the format:
```
{
  status: 200,
  body: 'photo-profile-1',
}
```
`createUser` returns a response with the format:
```
{
  firstName: 'Guillaume',
  lastName: 'Salva',
}
```

`.eslintrc.js`
```
module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/all',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
  },
  overrides:[
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js',
    }
  ]
};
```

Do not forget to run `npm` `install` when you have the `package.json`.

### Usage
`npm` run` `dev` `filename`

###
|TASK|FILE_NAME|DESCRIPTION|
|----|---------|-----------|
|0|[0-promise.js](https://github.com/adeniyitobi055/alx-frontend-javascript/blob/master/0x01-ES6_promise/0-promise.js)|Returns a Promise using this prototype function `getResponseFromAPI()`. When the `argument` is|
|1|[1-promise.js](https://github.com/adeniyitobi055/alx-frontend-javascript/blob/master/0x01-ES6_promise/1-promise.js)|Using the prototype - `getFullResponseFromAPI(success)`, returns a promise. The parameter is a `boolean`.|
|2|[2-then.js](https://github.com/adeniyitobi055/alx-frontend-javascript/blob/master/0x01-ES6_promise/2-then.js)|Using the function prototype `handleResponseFromAPI(promise)` it appends 3 handlers to the function|
|3|[3-all.js](https://github.com/adeniyitobi055/alx-frontend-javascript/blob/master/0x01-ES6_promise/3-all.js)|It imports `uploadPhoto` and `createUser` from `utils.js` and returns Promises using the prototype `handleProfileSignup()` to collective resolve all promises and logs `body firstName lastName` to the console|
|4|[4-user-promise.js](https://github.com/adeniyitobi055/alx-frontend-javascript/blob/master/0x01-ES6_promise/4-user-promise.js)|Using the prototype `signUpUser(firstName, lastName)` it returns a resolved promise|
|5|[5-photo-reject.js](https://github.com/adeniyitobi055/alx-frontend-javascript/blob/master/0x01-ES6_promise/5-photo-reject.js)|Writes and exports a function named `uploadPhoto`. It should accept `one argument` `fileName` (string) and returns a Promise rejecting with an Error and the string `$fileName cannot be processed`|
|6|[6-final-user.js](https://github.com/adeniyitobi055/alx-frontend-javascript/blob/master/0x01-ES6_promise/6-final-user.js)|Imports `signUpUser` from `4-user-promise.js` and `uploadPhoto` from `5-photo-reject.js`, writes and exports a function named `handleProfileSignup`|
|7|[7-load_balancer.js](https://github.com/adeniyitobi055/alx-frontend-javascript/blob/master/0x01-ES6_promise/7-load_balancer.js)|Writes and exports a function named `loadBalancer`. It accepts two arguments `chinaDownload (Promise)` and `USDownload (Promise)`. The function returns the value returned by the promise that resolved the first.|
|8|[8-try.js](https://github.com/adeniyitobi055/alx-frontend-javascript/blob/master/0x01-ES6_promise/8-try.js)|Writes a function named `divideFunction` that accepts two arguments: `numerator (Number)` and `denominator (Number)`|
|9|[9-try.js](https://github.com/adeniyitobi055/alx-frontend-javascript/blob/master/0x01-ES6_promise/9-try.js)|Writes a function named `guardrail` that accepts one argument mathFunction (Function).|
|10|[100-await.js](https://github.com/adeniyitobi055/alx-frontend-javascript/blob/master/0x01-ES6_promise/100-await.js)|Imports `uploadPhoto` and `createUser` from `utils.js` and writes an `async` function name `asyncUploadUser` that calls these two functions and returns an object.|
