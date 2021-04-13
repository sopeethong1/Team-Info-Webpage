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
const pageTemplate = require(`./src/page-template.js`);
//and now, we can use that pageTemplate as a function, which can ACCEPT a parameter
pageTemplate(answer_from_inquirer_prompt);

