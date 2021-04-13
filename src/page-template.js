// generate the HTML pages
const makeTeam = team => {
//a method for a template to render manager info

//a method for a template to render engineer info

// a method for a template to render intern info


    const  generateManager = manager = {
        return `${manager.getName()} etc etc`
    }
    const html = [];
        html.push(team
            .filter(employee => employee.getRole() === "Manager")
            .map(manager => generateManager(manager))
        );
        return html.join("");

}
//We are exporting out an anonymous function

    module.exports = team => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        YOUR METHOD GOES HERE THE CARDS OF MANAGER, INTERN, ENGINEER, WILL BE 
        ${someFunction(team)}
    </body>
    </html>
    
    `
}




