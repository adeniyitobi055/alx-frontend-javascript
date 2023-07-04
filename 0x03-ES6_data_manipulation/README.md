# 0x03-ES6_data_manipulation

## Editors
Some editors that can be used are `vi`, `vim`, `emacs`, `Visual Studio Code`.

## Setup
Install NodeJS (in your home directory):
```
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```

### Confirm installations
```
node -v
v12.11.1
npm -v
6.11.3
```

### Install Jest, Babel, and ESLint (in your project directory)
```
Install Jest using: npm install --save-dev jest
Install Babel using: npm install --save-dev babel-jest @babel/core @babel/preset-env
Install ESLint using: npm install --save-dev eslint
```

## Configuration files
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

**Don't forget to run `npm install` when you have the package.json**

## Usage
`npm` `run` `dev` `file_name`.

|TASK|FILE_NAME|DESCRIPTION|
|0|[0-get_list_students.js](https://github.com/adeniyitobi055/alx-frontend-javascript/blob/master/0x03-ES6_data_manipulation/0-get_list_students.js)|Creates a function `getListStudents` that returns an array of objects.|
|1|[1-get_list_student_ids.js](https://github.com/adeniyitobi055/alx-frontend-javascript/blob/master/0x03-ES6_data_manipulation/1-get_list_student_ids.js)|Creates a function `getListStudentIds` that returns an array of ids from a list of objects.|
|2|[2-get_students_by_loc.js](https://github.com/adeniyitobi055/alx-frontend-javascript/blob/master/0x03-ES6_data_manipulation/2-get_students_by_loc.js)|Creates a function `getStudentsByLocation` that returns an array of objects who are located in a specific city.|
|3|[3-get_ids_sum.js](https://github.com/adeniyitobi055/alx-frontend-javascript/blob/master/0x03-ES6_data_manipulation/3-get_ids_sum.js)|Creates a function `getStudentIdsSum` that returns the sum of all the student ids.|
|4|[4-update_grade_by_city.js](https://github.com/adeniyitobi055/alx-frontend-javascript/blob/master/0x03-ES6_data_manipulation/4-update_grade_by_city.js)|Creates a function `updateStudentGradeByCity` that returns an array of students for a specific city with their new grade.|
|5|[5-typed_arrays.js](https://github.com/adeniyitobi055/alx-frontend-javascript/blob/master/0x03-ES6_data_manipulation/5-typed_arrays.js)|Creates a function `createInt8TypedArray` that returns a new ArrayBuffer with an Int8 value at a specific position.|
|6|[6-set.js](https://github.com/adeniyitobi055/alx-frontend-javascript/blob/master/0x03-ES6_data_manipulation/6-set.js)|Creates a function `setFromArray` that returns a Set from an array.|
|7|[7-has_array_values.js](https://github.com/adeniyitobi055/alx-frontend-javascript/blob/master/0x03-ES6_data_manipulation/7-has_array_values.js)|Creates a function `hasValuesFromArray` that returns a boolean if all the elements in the array exist within the set.|
|8|[8-clean_set.js](https://github.com/adeniyitobi055/alx-frontend-javascript/blob/master/0x03-ES6_data_manipulation/8-clean_set.js)|Creates a function `cleanSet` that returns a string of all the set values that start with a specific string `(startString)`.|
|9|[9-groceries_list.js](https://github.com/adeniyitobi055/alx-frontend-javascript/blob/master/0x03-ES6_data_manipulation/9-groceries_list.js)|Creates a function `groceriesList` that returns a map of groceries.|
|10|[10-update_uniq_items.js](https://github.com/adeniyitobi055/alx-frontend-javascript/blob/master/0x03-ES6_data_manipulation/10-update_uniq_items.js)|Creates a function `updateUniqueItems` that returns an updated map for all items with initial quantity at 1.|
|11|[100-weak.js](https://github.com/adeniyitobi055/alx-frontend-javascript/blob/master/0x03-ES6_data_manipulation/100-weak.js)|Exports a `const` instance of `WeakMap` and export a new function `queryAPI`.|
