// Packages needed for this application
// Input
const inquirer = require('inquirer');
// Exports data
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Array of questions/prompts for the user to input
const questions = [
    {
        type: 'input',
        message: 'Enter the title of your project: ',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please describe your application: ',
        name: 'description',
    },
    {
        type: 'input',
        message: 'How should your application be installed?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'How does a user utilize your application?',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Please enter your contribution guidelines:',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'Please enter how you tested your application: ',
        name: 'tests'
    },
    {
        type: 'list',
        message: 'Please select which license you would like to use: ',
        name: 'license',
        choices: ['Apache','GNUGPL3','MIT','BSD2','BSD3','Boost','Creative','MIT','Eclipse','GNUAffero','GNUGPL2','GNULesser','Mozilla','Unilicense']
    },
    {
        type: 'input',
        message: 'Please enter your GitHub username: ',
        name: 'username',
    },
    {
        type: 'input',
        message: 'Please enter your email address for contact purposes related to questions: ',
        name: 'email',
    },
  ];

// Creates a new file with the data
const writeToFile = (fileName, data) => {
    fs.writeFile(`${fileName}.md`, data, (err) =>
    err ? console.error(err) : console.log('Success!'));
}

//  Initializes app
function init() {
    let data = {};

    // This will begin the prompts for user input
    inquirer
        .prompt(questions)
        .then(response => {
            data = response;
            // This will send the data to the file to write a README.
            writeToFile('README', generateMarkdown(data));
        });
}

// Function call to initialize app
init();
