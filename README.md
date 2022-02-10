# **Testing-code-by-JEST**


## **What is it**
In this project used open-source testing framework built on JavaScript named Jest.
Jest is a JavaScript testing framework designed to make sure that any JavaScript code
runs correctly. It allows you to write tests with a reasonable, familiar and functional API,
and quickly achieve the desired results.
Also, there are installed tools such as: ESLint which allows you to analyze the quality of your code and Prettier automatic code formatting tool.


## **Documentation**
The most up-to-date documentation for JEST can be found at *https://jestjs.io/*
Documentation for ESLint and Prettier you can find respectively by the links *https://eslint.org/* and
*https://prettier.io/*


## **Installation and work**
Download project from github on your computer. If you don't have node.js, go to *https://nodejs.org/*
download version for your OS, install, reboot.
Create a folder c:\project and put all these files from the zip archive there. At the command line, type:
```
cd c:\project
```
then:
```
npm install
```

#### **Installation and work Jest**
After the npm install command, the dependencies will be pulled up to work with the tests. To test the code, type
```
npm test
```
Тests will be run and executed.

if you need to test for one unit, run:
```
npm test file-name
```
Instead of manually running `npm test` all the time we can pass the `--watchAll` flag to Jest so that it can run on file changes:
```
npm run test:watch
```

for complete information on working with the command line, follow the link *https://jestjs.io/uk/docs/cli*

#### **Work with Prettier**
To format all files in a project with Prettier:
```
npm run prettier
```
For more information follow this link *https://prettier.io/docs/en/install.html*

#### **Work with ESLint**
To format your files with ESLint:
```
npm run lint
```

#### **Run code coverage**
To view the code coverage report on the command line run:
```
npm run coverage
```


## **Project implementation**
The purpose of the project was to get acquaintance with the jest framework. In this task I studied
the installation of this framework, its debugging, some methods were implemented, studied their behavior and the order of their application. Also I got acquainted with the procedure of installing and working with ESLint and Prettier.
Studied the order of creation README.md.


#### **Contacts**
email: *maksim.bombel@gmail.com*
tel: 0688260130
