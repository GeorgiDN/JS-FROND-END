# UNITTEST

01.
project-folder/
├── package.json
├── Car.js
├── __tests__/
│   └── car.test.js

02. npm install --save-dev jest

03. add in package.json-> "scripts": {
 "test": "jest"
}

04. add in package.json->   "jest": {
    "testMatch": ["**/*.test.js"]
  } 

05. npm test in terminal in the directory of project folder
