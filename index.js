// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';
// TODO: Create an array of questions for user input
const questions = ([
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Please provide a description for your project:',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Please provide installation instructions:',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'Please provide usage infomation:',
      name: 'usage',
    },
    {
      type: 'list',
      message: 'Please select a license:',
      name: 'license',
      choices: ['GNU' , 'MIT', 'Apache', 'None'],
    },
    {
      type: 'input',
      message: 'Please provide contribution guidelines:',
      name: 'contributing',
    },{

      type: 'input',
      message: 'Please provide tests instructions:',
      name: 'tests',
    },
    {
      type: 'input',
      message: 'Please provide your email:',
      name: 'email',
    },
    {
      type: 'input',
      message: 'Please provide your Github username:',
      name: 'github',
    },
  ])


// TODO: Create a function to write README file
/**
 * Writes data to a file.
 *
 * @param {string} fileName - The name of the file to write to.
 * @param {string} data - The data to write to the file.
 */
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => 
    err ? console.log(err) : console.log('Success!')
 );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then((answers) => {
    const markdown = generateMarkdown (answers)
    writeToFile('./utils/README.md', markdown)
  })
  .catch((err) => console.error(err))
}

// Function call to initialize app
init();
