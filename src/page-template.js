// generate the HTML pages

//a method for a template to render manager info

//a method for a template to render engineer info

// a method for a template to render intern info

const generateTeam = team => {

    const generateManager = manager => {
        return 
        `<div class="card-deck">
  <div class="card">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
${manager.getName()}`
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
    return ` `
}}

const generateEngineer = Engineer => {
    return 
    `<div class="card-deck">
  <div class="card">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>