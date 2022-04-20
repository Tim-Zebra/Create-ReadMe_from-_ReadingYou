// PER README "Everything a high quality ReadMe to have"
// https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide

// TODO: Include packages needed for this application
// Input
const inquirer = require('inquirer');
// Export
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [ // You'll need more questions.
    {
      type: 'input',
      message: 'What is your name?',
      name: 'username',
    },
    {
      type: 'list',
      message: 'What languages do you know?',
      name: 'language',
      choices: ['eng','span','french','jpn']
    },
    {
      type: 'input',
      message: 'What is your preferred method of communication?',
      name: 'communication',
    },
    {
        type: 'input',
        message: 'Please enter your file name',
        name: 'fileName'
    },
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
