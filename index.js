// importing packages
const fs = require("fs");
const inquirer = require("inquirer");
const markDown = require("./utils/generateMarkdown");
const writeFile = fs.writeFileSync;

//Prompt the user questions to populate the README.md
var questions = [
    {
        type: "input",
        name: "projectTitle",
        message: "What is the project title?",
    },
    {
        type: "input",
        name: "description",
        message: "Write a brief description of your project: "
    },
    {
        type: "input",
        name: "installation",
        message: "Describe the installation process: ",
    },
    {
        type: "input",
        name: "usage",
        message: "What is this project usage for?"
    },
    {
        type: "list",
        name: "license",
        message: "Choose the appropriate license for this project: ",
        choices: [
            "Apache",
            "Academic",
            "GNU",
            "ISC",
            "MIT",
            "Mozilla",
            "Open"
        ]
    },
    {
        type: "input",
        name: "contributing",
        message: "Who are the contributors of this project?"
    },
    {
        type: "input",
        name: "tests",
        message: "Provide any tests written for your application and how to run: "
    },
      {
        type: "input",
        name: "username",
        message: "Please enter your GitHub username: "
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email: "
    }
];

async function init() {
    try {
        var answers = await inquirer.prompt(questions)
        const markdown = markDown(answers);

        await writeFile('./readme/README.md', markdown);
        console.log('README.md was written successfully');

    } catch (err) {
        console.log(err);
    }
}

// function call to initialize program
init();