//Inquier goes here
// we would 1st require ALL of the files and node packages needed 
//Engineer, Manager, Intern
//the above extend from the main class Employee
//fs writefile stuff goes here too
//main logic lives here 
//index.js file is considered the entry point to your application
//the dist folder is where the output html will land. the writefile will end up in dist folder (const path from slack)
//We are receiving that anonymous function 
//Gibing the name of pageTemplate
// require that page-template.js=
const inquirer = require("inquirer");
const pageTemplate = require(`./src/page-template.js`);
//and now, we can use that pageTemplate as a function, which can ACCEPT a parameter

function runApp() {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'managerName',
            message: "what is your team manager's name?"
        },
        {   
            type: 'input',
            name: 'managerId',
            message: "what is your team manager's Id?"
         },
         {   
             type: 'input',
            name: 'managerEmail',
            message: "what is your team manager's email?"
         },
        {
            type: 'input',
            name: 'managerOfficeNum',
            message: "what is your team manager's office number?"
        }

    ]).then(answers => {
        //how to store this based on manager, engineer, and intern?
        //where can I store this to call this information later on?
        console.log(answers);
    })
}

runApp();