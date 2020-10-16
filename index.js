const generateMarkdown = require(`./utils/generateMarkdown`)
var inquirer = require("inquirer");
var fs = require("fs");

const questions = [
          {
        type: "input",
        message: "What is your full name?",
        name: "name"
         },
        {
            type: "input",
            message: "what is your project's name?",
            name: "title"
        },
        {
            type: "input",
            message: "What is your project's description?",
            name: "description"
        },
        {
            type: "list",
            message: "Which license will you use for your repository?",
            name: "license",
            choices: ["The MIT License", "BSD 2-Clause License", "BSD 3-Clause License", "Apache 2.0 License", "Boost Software License 1.0"]
        },
        {
            type: "input",
            message: "What are the installation instructions?",
            name: "installation"
        },
        {
            type: "input",
            message: "What's the usage information?",
            name: "usage"
        },
        {
            type: "input",
            message: "What are the contribution guidelines?",
            name: "contribution"
        },
        {
            type: "input",
            message: "What are the test instructions?",
            name: "testInst"
        },
        {
            type: "input",
            message: "What is your github username?",
            name: "username"
        },
        {
            type: "input",
            message: "What is the github repo link?",
            name: "repo"
        },
        {
            type: "input",
            message: "What's your email address?",
            name: "email"
        },
    ];

    

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then
    (response => {
        fs.writeFile("markdown.md", generateMarkdown(response), (err, response) => {
            if (err) {
                return console.log(err);
            }
        });
    });

};

init();
