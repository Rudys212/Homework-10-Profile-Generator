const path = require("path");
const fs = require("fs");
const engineerTemp = require("../src/templates/engineer");
const managerTemplate = require("../src/templates/manager");
const internTemplate = require("../src/templates/engineer");
const mainTemp = require("../src/templates/mainHtml");

const templates = path.resolve(__dirname, "../src/templates");

const render = (employees) => {
  const html = [];

  html.push(
    employees
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => renderManager(manager))
  );

  html.push(
    employees
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => renderEngineer(engineer))
  );
  html.push(
    employees
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => renderIntern(intern))
  );

  return renderMainPg(html.join(""));
};

const renderManager = (manager) => {
  return managerTemplate(manager);
};

const renderEngineer = (engineer) => {
  return engineerTemp(engineer);
};

const renderIntern = (intern) => {
  return internTemplate(intern);
};

// const renderMainPg = (team) => {
//   return mainTemp(template, "team", html);
// };

const renderMainPg = (template, sec, value) => {
  const updatingCards = new RegExp("{" + sec + "}");
  return template.replace(updatingCards, value);
};

module.exports = render;
