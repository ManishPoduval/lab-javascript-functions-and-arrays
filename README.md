# Sample LAB |Functions & Arrays

## Requirements
- Fork this repo
- Clone this repo

## Submission
Upon completion, run the following commands:
```
$ git add .
$ git commit -m "done"
$ git push origin master
```
if you're on the newer versions you might have to use the keyword `main` instead of `master`
**Don't Create Pull Request at all.**


## Automated Testing Introduction

### What is automated testing?
Automated software testing is the process of programmatically executing an application in order to validate and verify that it meets the business needs, as well as the technical requirements, and that it behaves as expected.
Testing should be viewed as a continuous process, not a discrete operation or single activity in the development lifecycle. Designing tests at the beginning of the product lifecycle can be help to mitigate common issues that arise when developing complex code bases.
Having a strong _test suite_ can provide you ease of mind, since you will be able to confidently improve upon your work while knowing that your not breaking a previously developed feature.

### Testing labs
This lab, along with some of the labs you will be working on during the bootcamp, has a complete test suite that is meant to ensure that your work fulfills the requirements we established.


### Testing with Jasmine
<!-- ![Jasmine Logo](https://i.imgur.com/A1pop7h.png) -->
Jasmine is an automated testing framework for JavaScript. It is designed to be used in Behavior-driven Development (**BDD**) programming, which focuses more on the business value than on the technical details.
We have already included Jasmine in the project you just forked, so let's see how to use it to implement our code.

### Usage
Before start coding, we will explain the project structure we have provided you:
```
lab-js-functions-and-arrays
├── README.md
├── SpecRunner.html
├── jasmine
│ └── ...
├── src
│ └── functions-and-arrays.js
└── tests
└── functions-and-arrays.spec.js
```
We will be working with the `src/functions-and-arrays.js`. In the `jasmine` folder you can find all of the files needed to use Jasmine. All these files are already linked with the `SpecRunner.html` file. In case you want to check the tests, they are in the `tests/functions-and-arrays.spec.js` file.


#### Run tests
Running automated tests with Jasmine is super easy. All you need to do is open the `SpecRunner.html` file in your browser. You will find something similar this:
![image](https://user-images.githubusercontent.com/23629340/33389609-c2f3965c-d533-11e7-9a03-e0a89314dd98.png)


#### Pass the tests
You should write your code on the `src/functions-and-arrays.js` file. While following the instructions for each iteration, you should check every test and make sure it's _passing_, before moving on.
Do not rush. You should take your time to carefully read every iteration, and you should address the _breaking_ tests as you progress through the exercise.
When coding with tests, it is super important that you carefully read and understand the errors you are getting, this way you will know for sure what's expected from your code.
Note that **you don't need to execute the functions yourself**, the tests are responsible for doing that. All you should do is declare them, make sure they deal with the parameters passed and that they return what is indicated on the iterations and in the test messages. For some iterations we provide you with a sample array, so that you can do some **manual** testing, if you wish.


## Instructions

### Sample Iteration #1: Do the math
Create a function `**doTheMath**` that has three parameters ``num1, sign, num2`` in that order.  
It must **return** the result of the mathematical operations of `num1 operator num2.` Allowed operators (signs) are +, -, *, /, %, **.  
Hint: you can use the switch statement.


**Happy coding!** :heart: