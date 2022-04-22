// PER README "Everything a high quality ReadMe to have"
// https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide

// TODO: Include packages needed for this application

// Input
const inquirer = require('inquirer');
const genMarkdown = require('./utils/generateMarkdown.js')
// Export
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [ //Adjust questions based on 'PER README' above
    {
        type: 'input',
        message: 'Enter the title of your ReadMe: ',
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
        message: 'Please enter the instructions for testing your application: ',
        name: 'test'
    },
    {
        type: 'list',
        message: 'Please select which license you would like to use: ',
        name: 'license',
        choices: ['eng','span','french','jpn']
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

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
// Take in the name of the file and the data.


// Get the basis: Make sure your import can be exported. Then play with this other stuff.
renderLicenseBadge(license)
renderLicenseLink(license);
renderLicenseSection(license);
generateMarkdown(data);

// Create a .MD file, and write to it.
fs.writeFile(`${fileName}.md`, JSON.stringify(response), (err) =>
err ? console.error(err) : console.log('Success!'));



// title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// When license is chosen, the badge will be added near the top of the ReadMe and a notice is added to the section entitled "license"
// username and email is added to the "Questions" section of the readme
// section with contact includes instructions on how to reach me with additional questions
// Table of contents - When click on links, then taken to corresponding section of readme
}

// TODO: Create a function to initialize app
function init() {   /* See what the intro should look like from lecture video on 4-20-22.*/ 
// This will begin the prompts
writeToFile(a,b);
}

// Function call to initialize app
init();
