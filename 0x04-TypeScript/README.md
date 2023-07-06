# 0x04-TypeScript

## Configuration Files
`package.json`
```
{
  "name": "typescript_dependencies",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start-dev": "webpack-dev-server --open",
    "build": "webpack",
    "test": "jest"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/plugin-proposal-export-default-from": "^7.5.2",
    "@babel/preset-typescript": "^7.7.2",
    "@types/jest": "^24.0.23",
    "@typescript-eslint/eslint-plugin": "^2.4.0",
    "@typescript-eslint/parser": "^2.4.0",
    "clean-webpack-plugin": "^3.0.0",
    "fork-ts-checker-webpack-plugin": "^1.5.1",
    "html-webpack-plugin": "^3.2.0",
    "jest": "^24.9.0",
    "source-map": "^0.7.3",
    "ts-jest": "^24.1.0",
    "ts-loader": "^6.2.0",
    "typescript": "^3.6.4",
    "webpack": "^4.41.2",
    "webpack-cli": "^3.3.9",
    "webpack-dev-server": "^3.8.2"
  }
}
```

`.eslintrc.js`
```
module.exports =  {
  parser:  '@typescript-eslint/parser',
  extends:  [
    'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from @typescript-eslint/eslint-plugin
  ],
  parserOptions:  {
    ecmaVersion:  2018,
    sourceType:  'module',
  },
  rules:  {
  },
};
```

`tsconfig.json`
```
{
  "compilerOptions": {
    "outDir": "./dist/",
    "sourceMap": true,
    "noImplicitAny": true,
    "module": "es6",
    "target": "es5",
    "allowJs": true,
    "moduleResolution": "node"
  }
}
```

`webpack.config.js`
```
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  entry: "./js/main.ts",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true
        }
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  devServer: {
    contentBase: "./dist"
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Development"
    })
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};
```
## Descriptions
0. Creating an interface for a student. 
We create a directory `task_0` and copy the following configuration files (provided above) into the `task_0` directory: `package.json`, `.eslintrc.js`, `tsconfig.json`, `webpack.config.js`.

We write the code in the main.ts file:

 - Writes an interface named `Student` that accepts the following elements: `firstName(string)`, `lastName(string)`, `age(number)`, and `location(string)`.
 - Creates two students, and create an array named `studentsList` containing the two variables
 - Using Vanilla Javascript, it renders a table and for each elements in the array, and appends a new row to the table
 - Each row contains the first name of the student and the location.

**Requirements:**

 - When running, Webpack, returns `No type errors`.
 - Every variable uses TypeScript when possible.

**Files:** task_0/js/[main.ts](https://github.com/adeniyitobi055/alx-frontend-javascript/blob/master/0x04-TypeScript/task_0/js/main.ts), `task_0/package.json`, `task_0/.eslintrc.js`, `task_0/tsconfig.json`, `task_0/webpack.config.js`.

1. Let's build a Teacher interface
We create a directory `task_1` and copy these configuration files into this folder: `package.json`, `tsconfig.json`, `webpack.config.js`.

 - `firstName(string)` and `lastName(string)`. These two attributes can only be modifiable when a Teacher is first initialized
 - `fullTimeEmployee(boolean)` this attribute must always be defined
 - `yearsOfExperience(number)` this attribute is optional
 - `location(string)` this attribute must always be defined
 - Adds the possibility to add any attribute to the Object like `contract(boolean)` without specifying the name of the attribute

**Example:**
```
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

// should print
// Object
// contract: false
// firstName: "John"
// fullTimeEmployee: false
// lastName: "Doe"
// location: "London"
```
**Files:** task_1/js/[main.ts](https://github.com/adeniyitobi055/alx-frontend-javascript/blob/master/0x04-TypeScript/task_1/js/main.ts), `task_1/webpack.config.js`, `task_1/tsconfig.json`, `task_1/package.json`.

2. Extending the Teacher class
We write an interface named `Directors` that extends `Teacher`. It requires an attribute named `numberOfReports(number)`.

**Example:**
```
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

// should print
// Object
// firstName: "John"
// fullTimeEmployee: true
// lastName: "Doe"
// location: "London"
// numberOfReports: 17
```
**File:** task_1/js/[main.ts](https://github.com/adeniyitobi055/alx-frontend-javascript/blob/master/0x04-TypeScript/task_1/js/main.ts).

3. Printing teachers
We write a function `printTeacher`:

 - It accepts two arguments `firstName` and `lastName`.
 - It returns the first letter of the firstName and the full lastName
 - Example: `printTeacher("John", "Doe") -> J. Doe`.

We write an interface for the function named `printTeacherFunction`.

**File:** task_1/js/[main.ts](https://github.com/adeniyitobi055/alx-frontend-javascript/blob/master/0x04-TypeScript/task_1/js/main.ts).

4. Writing a class
Writes a Class named `StudentClass`:

 - The constructor accepts `firstName(string)` and `lastName(string)` arguments.
 - The class has a method named `workOnHomework` that returns the string `Currently working`.
 - The class has a method named `displayName`. It returns the firstName of the student.
 - The constructor of the class is described through an Interface.
 - The class is described through an Interface.

**Requirements:**

 - You can reuse the Webpack configuration from the previous exercise to compile the code.
 - When running `npm run build`, no TypeScript error should be displayed.
 - Every variable should use TypeScript when possible.

**File:** task_1/js/[main.ts](https://github.com/adeniyitobi055/alx-frontend-javascript/blob/master/0x04-TypeScript/task_1/js/main.ts).

5. Advanced types Part 1
Creates the `DirectorInterface` interface with 3 methods:

 - `workFromHome()` returns a string
 - `getCoffeeBreak()` returns a string
 - `workDirectorTasks()` returns a string

Creates the `TeacherInterface` interface with 3 methods:

 - `workFromHome()` returns a string
 - `getCoffeeBreak()` returns a string
 - `workTeacherTasks()` returns a string

Creates a class `Director` that implements `DirectorInterface`

 - `workFromHome` returns the string **Working from home**.
 - `getToWork` returns the string **Getting a coffee break**.
 - `workDirectorTasks` returns the string **Getting to director tasks**.

Creates a class `Teacher` that implements `TeacherInterface`

 - `workFromHome` returns the string **Cannot work from home**.
 - `getCoffeeBreak` returns the string **Cannot have a break**.
 - `workTeacherTasks` returns the string **Getting to work**.

Creates a function `createEmployee` with theses requirements:

 - It returns either a `Director` or a `Teacher` instance.
 - It accepts 1 arguments:
   - `salary`(either number or string).
 - if `salary` is a number and less than 500 - It returns a new `Teacher`. Otherwise it should return a `Director`.

**Expected result:**
```
console.log(createEmployee(200));
Teacher
console.log(createEmployee(1000));
Director
console.log(createEmployee('$500'));
Director
```

**Files:** task_2/js/[main.ts](https://github.com/adeniyitobi055/alx-frontend-javascript/blob/master/0x04-TypeScript/task_2/js/main.ts), `task_2/webpack.config.js`, `task_2/tsconfig.json`, `task_2/package.json`.

6. Creating functions specific to employees
Writes a function `isDirector`:

 - it accepts `employee` as an argument
 - it is used as a type predicate and if the employee is a director

Writes a function `executeWork`:

 - it accepts `employee` as an argument
 - if the employee is a Director, it calls `workDirectorTasks`.
 - if the employee is a Teacher, it alls `workTeacherTasks`.

**Expected result:**
```
executeWork(createEmployee(200));
Getting to work
executeWork(createEmployee(1000));
Getting to director tasks
```

**Files:** task_2/js/[main.ts](https://github.com/adeniyitobi055/alx-frontend-javascript/blob/master/0x04-TypeScript/task_2/js/main.ts).

7. String literal types
Writes a **String literal** type named `Subjects` allowing a variable to have the value `Math` or `History` only. Writes a function named `teachClass`:

 - it takes `todayClass` as an argument
 - it returns the string `Teaching Math` if `todayClass` is `Math`.
 - it returns the string `Teaching History` if `todayClass` is `History`.

**Expected result:**
```
teachClass('Math');
Teaching Math
teachClass('History');
Teaching History
```

**Files:** task_2/js/[main.ts](https://github.com/adeniyitobi055/alx-frontend-javascript/blob/master/0x04-TypeScript/task_2/js/main.ts).

8. Ambient Namespaces
We create a directory called `task_3` and copy these configuration files into it: `package.json`, `webpack.config.js`, `tsconfig.json`.

The first part requires to build an `interface` and a `type`. Inside a file named `interface.ts`:

 - Creates a type `RowID` and set it equal to `number`
 - Creates an interface `RowElement` that contains these 3 fields:
   - `firstName`: `string`
   - `lastName`: `string`
   - `age?`: `number`

Building the next part of the application architecture. The goal is to save the entities to a database. Because of time constraints, we can’t write a connector to the database, and we decided to download a library called [crud.js](https://github.com/adeniyitobi055/alx-frontend-javascript/blob/master/0x04-TypeScript/task_3/js/crud.js).

Writes an ambient file within `task_3/js`, named [crud.d.ts](https://github.com/adeniyitobi055/alx-frontend-javascript/blob/master/0x04-TypeScript/task_3/js/crud.d.ts) that contains the type declarations for each crud function. At the top of the file import `RowID` and `RowElement` from [interface.ts](https://github.com/adeniyitobi055/alx-frontend-javascript/blob/master/0x04-TypeScript/task_3/js/interface.ts).

In [main.ts](https://github.com/adeniyitobi055/alx-frontend-javascript/blob/master/0x04-TypeScript/task_3/js/main.ts)

 - Creates a triple slash directive that includes all the dependencies from [crud.d.ts](https://github.com/adeniyitobi055/alx-frontend-javascript/blob/master/0x04-TypeScript/task_3/js/crud.d.ts).
 - Imports the `rowID` type and `rowElement` from [interface.ts](https://github.com/adeniyitobi055/alx-frontend-javascript/blob/master/0x04-TypeScript/task_3/js/interface.ts).
 - Imports everything from  [crud.js](https://github.com/adeniyitobi055/alx-frontend-javascript/blob/master/0x04-TypeScript/task_3/js/crud.js) as CRUD

Creates an object called `row` with the type `RowElement` with the fields set to these values:

 - `firstName`: `Guillaume`
 - `lastName`: `Salva`

Creates a **const** variable named `newRowID` with the type `RowID` and assigns the value the `insertRow` command.

Next, creates a **const** variable named `updatedRow` with the type `RowElement` and updates `row` with an age field set to `23`.

Finally, calls the `updateRow` and `deleteRow` commands.

**Expected result:**
```
const obj = {firstName: "Guillaume", lastName: "Salva"};
CRUD.insertRow(obj)
// Insert row {firstName: "Guillaume", lastName: "Salva"}

const updatedRow: RowElement = { firstName: "Guillaume", lastName: "Salva", age: 23 };
CRUD.updateRow(newRowID, updatedRow);
// Update row 125 {firstName: "Guillaume", lastName: "Salva", age: 23}

CRUD.deleteRow(125);
// Delete row id 125
```

**Requirements:**

 - When running `npm run build`, no TypeScript error should be displayed.
 - Every variable should use TypeScript when possible.
 - The main file and the ambient file should both import the types defined in the interface file.
 - You can easily test your ambient file by looking at the intellisense of your IDE when using the 3rd party functions.

**Files:** task_3/js/[main.ts](https://github.com/adeniyitobi055/alx-frontend-javascript/blob/master/0x04-TypeScript/task_3/js/main.ts), task_3/js/[interface.ts](https://github.com/adeniyitobi055/alx-frontend-javascript/blob/master/0x04-TypeScript/task_3/js/interface.ts), task_3/js/[crud.d.ts](https://github.com/adeniyitobi055/alx-frontend-javascript/blob/master/0x04-TypeScript/task_3/js/crud.d.ts).

9. Namespace & Declaration merging
Create a new directory `task_4` and copy the above `tsconfig.json` and put this `package.json` in there
```
{
  "name": "task_4",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@typescript-eslint/eslint-plugin": "^2.4.0",
    "@typescript-eslint/parser": "^2.4.0",
    "typescript": "^3.6.4"
  }
}
```

In task_4/js/[subjects](https://github.com/adeniyitobi055/alx-frontend-javascript/tree/master/0x04-TypeScript/task_4/js/subjects) we:

 - create a file [Teacher.ts](https://github.com/adeniyitobi055/alx-frontend-javascript/blob/master/0x04-TypeScript/task_4/js/subjects/Teacher.ts) and write a `Teacher` interface in a namespace named `Subjects`.
   - the interface requires `firstName` and `lastName` as string

 - create a file [Subject.ts](https://github.com/adeniyitobi055/alx-frontend-javascript/blob/master/0x04-TypeScript/task_4/js/subjects/Subject.ts) and write a `Subject` class in the same namespace named `Subjects`.
   - the class has one attribute `teacher` that implements the `Teacher` interface
   - the class has one setter method `setTeacher` that accepts a `teacher` in argument (and as setter, set the instance attribute `teacher` with it)

 - create a file [Cpp.ts](https://github.com/adeniyitobi055/alx-frontend-javascript/blob/master/0x04-TypeScript/task_4/js/subjects/Cpp.ts) and make theses modifications in the same namespace.
   - using declaration merging, add a new optional attribute `experienceTeachingC` (number) to the `Teacher` interface.
   - create a class `Cpp` extending from `Subject`.
   - write a method named `getRequirements` that returns a string **Here is the list of requirements for Cpp**.
   - write a method named `getAvailableTeacher` that returns a string **Available Teacher: <first name of teacher>**.
   - if the teacher doesn’t have any experience in teaching C, then the method returns a string **No available teacher**.

 - create a file [React.ts](https://github.com/adeniyitobi055/alx-frontend-javascript/blob/master/0x04-TypeScript/task_4/js/subjects/React.ts) and write a `React Class` in the same namespace.

   - add a new attribute `experienceTeachingReact?` (number) to the `Teacher` interface.
   - in the class, write a method named `getRequirements` that returns a string **Here is the list of requirements for React**.
   - write a method named `getAvailableTeacher` that returns a string **Available Teacher: <first name of teacher>**.
   - if the teacher doesn’t have any experience in teaching React, then the method returns a string **No available teacher**.

 - Create a file [Java.ts](https://github.com/adeniyitobi055/alx-frontend-javascript/blob/master/0x04-TypeScript/task_4/js/subjects/Java.ts) and write a `Java Class` in the same namespace.

   - add a new attribute `experienceTeachingJava?` (number) to the `Teacher` interface.
   - in the class, write a method named `getRequirements` that returns a string **Here is the list of requirements for Java**.
   - write a method named `getAvailableTeacher` that returns a string **Available Teacher: <first name of teacher>**.
   - if the teacher doesn’t have any experience in teaching Java, then the method returns a string **No available teacher**.

**Files:** `task_4/package.json`, `task_4/tsconfig.json`, task_4/js/subjects/[Cpp.ts](https://github.com/adeniyitobi055/alx-frontend-javascript/blob/master/0x04-TypeScript/task_4/js/subjects/Cpp.ts), task_4/js/subjects/[Java.ts](https://github.com/adeniyitobi055/alx-frontend-javascript/blob/master/0x04-TypeScript/task_4/js/subjects/Java.ts), task_4/js/subjects/[React.ts](https://github.com/adeniyitobi055/alx-frontend-javascript/blob/master/0x04-TypeScript/task_4/js/subjects/React.ts), task_4/js/subjects/[Subject.ts](https://github.com/adeniyitobi055/alx-frontend-javascript/blob/master/0x04-TypeScript/task_4/js/subjects/Subject.ts), task_4/js/subjects/[Teacher.ts](https://github.com/adeniyitobi055/alx-frontend-javascript/blob/master/0x04-TypeScript/task_4/js/subjects/Teacher.ts).

10. Update task_4/js/[main.ts](https://github.com/adeniyitobi055/alx-frontend-javascript/blob/master/0x04-TypeScript/task_4/js/main.ts)
 - create and export a constant `cpp` for Cpp Subjects.
 - create and export a constant `java` for Java Subjects.
 - create and export a constant `react` for React Subjects.
 - create and export one Teacher object `cTeacher` with `experienceTeachingC = 10`.
 - for Cpp subject, logs to the console `C++`, sets `cTeacher` as the teacher, calls the two methods `getRequirements` and `getAvailableTeacher` and prints the strings they return.
 - for Java subject, logs to the console `Java`, sets `cTeacher` as the teacher, calls the two methods `getRequirements` and `getAvailableTeacher`, and prints the strings they return
 - for React subject, logs to the console `React`, sets `cTeacher` as the teacher, calls the two methods `getRequirements` and `getAvailableTeacher`, and prints the strings they return.

**File:** task_4/js/[main.ts](https://github.com/adeniyitobi055/alx-frontend-javascript/blob/master/0x04-TypeScript/task_4/js/main.ts)

11. Brand convention & Nominal typing
Create a directory `task_5` and copy these configuration files into the root of task_5: `package.json`, `tsconfig.json`, `webpack.config.js`.

Create two interfaces `MajorCredits` and `MinorCredits` in task_5/js/[main.ts](https://github.com/adeniyitobi055/alx-frontend-javascript/blob/master/0x04-TypeScript/task_5/js/main.ts):

 - each interface defines a number named `credits`.
 - add a brand property to each interface in order to uniquely identify each of them

Create two functions named `sumMajorCredits` and `sumMinorCredits` in task_5/js/[main.ts](https://github.com/adeniyitobi055/alx-frontend-javascript/blob/master/0x04-TypeScript/task_5/js/main.ts):

 - each function takes two arguments `subject1` and `subject2`.
 - `sumMajorCredits` returns `MajorCredits` value and `sumMinorCredits` returns `MinorCredits` value.
 - each function sums the credits of the two subjects

**Files:** task_5/js/[main.ts](https://github.com/adeniyitobi055/alx-frontend-javascript/blob/master/0x04-TypeScript/task_5/js/main.ts), `task_5/package.json`, `task_5/webpack.config.js`, `task_5/tsconfig.json`.
