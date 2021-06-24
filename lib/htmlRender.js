const path = require("path");
const fs = require("fs");

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
  let template = fs.readFileSync(
    path.resolve(templates, "manager.html"),
    "utf8"
  );
  template = replaceSec(template, "name", manager.getName());
  template = replaceSec(template, "role", manager.getRole());
  template = replaceSec(template, "email", manager.getEmail());
  template = replaceSec(template, "id", manager.getId());
  template = replaceSec(template, "officeNumber", manager.getOfficeNumber());
  return template;
};

const renderEngineer = (engineer) => {
  let template = fs.readFileSync(
    path.resolve(templates, "engineer.html"),
    "utf8"
  );
  template = replaceSec(template, "name", engineer.getName());
  template = replaceSec(template, "role", engineer.getRole());
  template = replaceSec(template, "email", engineer.getEmail());
  template = replaceSec(template, "id", engineer.getId());
  template = replaceSec(template, "gitHub", engineer.getGithub());
  return template;
};

const renderIntern = (intern) => {
  let template = fs.readFileSync(
    path.resolve(templates, "intern.html"),
    "utf8"
  );
  template = replaceSec(template, "name", intern.getName());
  template = replaceSec(template, "role", intern.getRole());
  template = replaceSec(template, "email", intern.getEmail());
  template = replaceSec(template, "id", intern.getId());
  template = replaceSec(template, "school", intern.getSchool());
  return template;
};

const renderMainPg = (html) => {
  const template = fs.readFileSync(
    path.resolve(templates, "main.html"),
    "utf8"
  );
  return replaceSec(template, "team", html);
};

const replaceSec = (template, sec, value) => {
  const updatingCards = new RegExp("{{" + sec + "}}");
  return template.replace(updatingCards, value);
};

module.exports = render;
