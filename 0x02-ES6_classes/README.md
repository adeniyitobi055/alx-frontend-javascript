# 0x02. ES6 classes

### Editors
Some editors that can be used are: `vi`, `vim`, `emacs`, `Visual Studio Code`.

### Setup
Install NodeJS 12.11.X (in your home directory):
```
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```

Confirm your installations:
```
$ node -v
v12.11.1
$ npm -v
6.11.3
```

Install Jest, Babel, and ESLint (in your project directory):
```
Install Jest using: npm install --save-dev jest
Install Babel using: npm install --save-dev babel-jest @babel/core @babel/preset-env
Install ESLint using: npm install --save-dev eslint
```

### Configuration files
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
    "@babel/preset-env": "^7.6.0",
    "@babel/node": "^7.8.0",
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
    'max-classes-per-file': 'off',
    'no-underscore-dangle': 'off',
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
**Don't forget to run `num install` when you have the package.json**

### Usage
`npm run dev file_name`


|TASK|FILE_NAME|DESCRIPTION|
|----|---------|-----------|
|0|[0-classroom.js](https://github.com/adeniyitobi055/alx-frontend-javascript/blob/master/0x02-ES6_classes/0-classroom.js)|Implements a class named `ClassRoom` and accepts one argument: `maxStudentsSize` (Number) and assigns it to `_maxStudentsSize`|
|1|[1-make_classrooms.js](https://github.com/adeniyitobi055/alx-frontend-javascript/blob/master/0x02-ES6_classes/1-make_classrooms.js)|Imports the `ClassRoom` class from `0-classroom.js` and implements a function named `initializeRoom`. It returns an `array` of `3 ClassRoom objects` with the `sizes 19, 20, and 34` (in this order)|
|2|[2-hbtn_course.js](https://github.com/adeniyitobi055/alx-frontend-javascript/blob/master/0x02-ES6_classes/2-hbtn_course.js)|Implements a class named `HolbertonCourse` with constructor attributes: `name`, `length`, `students`|
|3|[3-currency.js](https://github.com/adeniyitobi055/alx-frontend-javascript/blob/master/0x02-ES6_classes/3-currency.js)|Implements a class named `Currency` with constructor attributes: `code` and `name`. And implements a method named `displayFullCurrency` that returns the attributes in this format `name (code)`|
|4|[4-pricing.js](https://github.com/adeniyitobi055/alx-frontend-javascript/blob/master/0x02-ES6_classes/4-pricing.js)|Imports the class `Currency` from `3-currency.js`. Implements a class named `Pricing` with constructor attributes: `amount` and `currency`. Implements a method named `displayFullPrice` that returns the attributes in this format `amount currency_name (currency_code)`. And implements a `static method` named `convertPrice`: it accepts two arguments: `amount` and `conversionRate` and returns the `amount` multiplied by the `conversion rate`|
|5|[5-building.js](https://github.com/adeniyitobi055/alx-frontend-javascript/blob/master/0x02-ES6_classes/5-building.js)|Implements a class named `Building` with constructor attributes: `sqft` (Number). Consider this class abstract - any class that extends from it should implement a method named `evacuationWarningMessage`, if not, an error is thrown `Class extending Building must override evacuationWarningMessage`|
|6|[6-sky_high.js](https://github.com/adeniyitobi055/alx-frontend-javascript/blob/master/0x02-ES6_classes/6-sky_high.js)|Imports `Building` class from `5-building.js`. Implements a class named `SkyHighBuilding` that extends from `Building` with constructor attributes `sqft` and `floors`. And Overrides the method named `evacuationWarningMessage` and returns the string `Evacuate slowly the NUMBER_OF_FLOORS floors`.|
|7|[7-airport.js](https://github.com/adeniyitobi055/alx-frontend-javascript/blob/master/0x02-ES6_classes/7-airport.js)|Implements a class named `Airport` with constructor attributes: `name` and `code`. The default string description of the class returns the airport `code`|
|8|[8-hbtn_class.js](https://github.com/adeniyitobi055/alx-frontend-javascript/blob/master/0x02-ES6_classes/8-hbtn_class.js)|Implements a class named `HolbertonClass` with constructor attributes: `size` and `location`. When the class is cast into a Number, it returns the `size`. When the class is cast into a String, it returns the `location`.|
|9|[9-hoisting.js](https://github.com/adeniyitobi055/alx-frontend-javascript/blob/master/0x02-ES6_classes/9-hoisting.js)|Deugging of the `HolbertonClass` and `StudentHolberton` classes.|
|10|[10-car.js](https://github.com/adeniyitobi055/alx-frontend-javascript/blob/master/0x02-ES6_classes/10-car.js)|Implements a class name `Car` with constructor attributes: `brand`, `motor`, and `color`. A method named `cloneCar` returns a new object of the class|
|11|[100-evcar.js](https://github.com/adeniyitobi055/alx-frontend-javascript/blob/master/0x02-ES6_classes/100-evcar.js)|Imports `Car` class from `10-car.js`. Implements a class named `EVCar` that extends the `Car` class with constructor attributes: `brand`, `motor`, `color`, and `range`. When `cloneCar` is called on a `EVCar` object, the object returns an instance of `Car` instead of `EVCar`|
