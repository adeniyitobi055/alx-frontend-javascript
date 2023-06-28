# 0x00-ES6_basic

### Editors
Some editors you can use are `vi`, `vim`, `emacs`, `Visual Studio Code`.

### Setup
Install NodeJS 12.11.x (in your home directory):
```
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```

Confirm your installation:
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

Finally...
Don't forget to run `npm install` from the terminal of your project folder to install 
all necessary project dependencies.

### Usage
To run the file in your terminal ensure you've made all the necessary configuration then run the following command below:
`npm` `run` `dev` `index.js`
The `index.js` is a file and can be optional depending on your configurations.



|TASK|FILE_NAME|DESCRIPTION|
|----|---------|-----------|
|0|[0-constants.js](https://github.com/adeniyitobi055/alx-frontend-javascript/blob/master/0x00-ES6_basic/0-constants.js)|Modify the variables in the function|
|1|[1-block-scoped.js](https://github.com/adeniyitobi055/alx-frontend-javascript/blob/master/0x00-ES6_basic/1-block-scoped.js)|Modify the variables inside the `taskBlock` so that the variables aren’t overwritten inside the conditional block.|
|2|[2-arrow.js](https://github.com/adeniyitobi055/alx-frontend-javascript/blob/master/0x00-ES6_basic/2-arrow.js)|Rewrite the function to use ES6’s arrow syntax of the function `add` `(it will be an anonymous function after)`|
|3|[3-default-parameter.js](https://github.com/adeniyitobi055/alx-frontend-javascript/blob/master/0x00-ES6_basic/3-default-parameter.js)|Condense the internals of the function to 1 line - without changing the name of each function/variable|
|4|[4-rest-parameter.js](https://github.com/adeniyitobi055/alx-frontend-javascript/blob/master/0x00-ES6_basic/4-rest-parameter.js)|Modify the function to return the number of arguments passed to it using the rest parameter syntax|
|5|[5-spread-operator.js](https://github.com/adeniyitobi055/alx-frontend-javascript/blob/master/0x00-ES6_basic/5-spread-operator.js)|Using the spread syntax, it concatenate 2 arrays and each character of a string.|
|6|[6-string-interpolation.js](https://github.com/adeniyitobi055/alx-frontend-javascript/blob/master/0x00-ES6_basic/6-string-interpolation.js)|Apply template literals on the return statement so you can the substitute the variables you’ve defined.|
|7|[7-getBudgetObject.js](https://github.com/adeniyitobi055/alx-frontend-javascript/blob/master/0x00-ES6_basic/7-getBudgetObject.js)|Modify the function’s budget object to simply use the keyname instead.|
|8|[8-getBudgetCurrentYear.js](https://github.com/adeniyitobi055/alx-frontend-javascript/blob/master/0x00-ES6_basic/8-getBudgetCurrentYear.js)|Rewrite the `getBudgetForCurrentYear` function to use ES6 computed property names on the `budget` object.|
|9|[9-getFullBudget.js](https://github.com/adeniyitobi055/alx-frontend-javascript/blob/master/0x00-ES6_basic/9-getFullBudget.js)|Rewrite `getFullBudgetObject` to use ES6 method properties in the `fullBudget` object|
|10|[10-loops.js](https://github.com/adeniyitobi055/alx-frontend-javascript/blob/master/0x00-ES6_basic/10-loops.js)|Rewrite the function `appendToEachArrayValue` to use ES6’s `for...of` operator. And don’t forget that var is not ES6-friendly.|
|11|[11-createEmployeesObject.js](https://github.com/adeniyitobi055/alx-frontend-javascript/blob/master/0x00-ES6_basic/11-createEmployeesObject.js)|Creates a function named `createEmployeesObject` that will receive `two arguments`: `departmentName (String)`, `employees (Array of Strings)`|
|12|[12-createReportObject.js](https://github.com/adeniyitobi055/alx-frontend-javascript/blob/master/0x00-ES6_basic/12-createReportObject.js)|Creates a function named `createReportObject` whose parameter, `employeesList`, is the return value of the previous function `createEmployeesObject`.|
|13|[100-createIteratorObject.js](https://github.com/adeniyitobi055/alx-frontend-javascript/blob/master/0x00-ES6_basic/100-createIteratorObject.js)|Creates a function named `createIteratorObject`, that will take into argument a `report Object` created with the previous function `createReportObject`.|
|14|[101-iterateThroughObject.js](https://github.com/adeniyitobi055/alx-frontend-javascript/blob/master/0x00-ES6_basic/101-iterateThroughObject.js)|Finally! Creates a function named `iterateThroughObject`. The function’s parameter `reportWithIterator` is the return value from `createIteratorObject`.|
