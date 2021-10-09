// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');
const util = require("util");
const generateMd = require("./utils/generateMarkdown");
const writeFile = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your project title?' , 
        name: 'title',

    },
    {
        type: 'input',
        message: 'What is the description of your project?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are your installation instructions?',
        name: 'install',
    },
    {
        type: 'input',
        message: 'How do you use this application?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What are your contribution guidelines?',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'What are your test instructions?',
        name: 'testing'
    },
    {
        type: 'list',
        message: 'What is the license of your application?',
        name: 'license',
        choices: [            
        "MIT",
        "Unlicense",
        "Apache 2.0",
        "GNU v3",
        "BSD 3-Clause",
        "Mozilla Public License 2.0"
        ],
    },
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name:'email',
    },
];

const promptUser = () => {
    return inquirer
        .prompt(questions);
}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return writeFile(fileName, data);

}

// TODO: Create a function to initialize app
async function init() {    
    try { 

    const answers = await promptUser();

    const fileContent = generateMd(answers);

    await writeToFile("./readme/README.md", fileContent);


} catch (err) {
    console.error("Error creating README. File not created.");
    console.log(err);
}
}
// Function call to initialize app
init();
