const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const mainHtml = require("./src/templates/mainHtml");

const engineerSec = require("./src/templates/engineer");
const internSec = require("./src/templates/intern");
const managerSec = require("./src/templates/manager");

const outputPath = path.resolve(__dirname, "dist/output", "output.html");

const employees = [];

// building a manager
function init() {
  console.log(
    "Build your team's profiles using the following prompts! Starting with Manager"
  );
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your first name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is your employee ID number?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your email address?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is your office number?",
      },
    ])
    .then((response) => {
      const managerProfile = new Manager(
        response.name,
        response.id,
        response.email,
        response.officeNumber
      );
      const managerCard = managerSec(managerProfile);
      employees.push(managerCard);
      otherEmployee();
    });
  //       employees.push(managerProfile);
  //
  //
  // }
  // next, enter other employees or select done
  function otherEmployee() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "otherEmployees",
          message:
            "Which of the following roles would you like to add to your team?",
          choices: ["Engineer", "Intern", "Done adding team members"],
        },
      ])
      .then((answers) => {
        switch (answers.otherEmployees) {
          case "Engineer": {
            addEngineer();
            break;
          }
          case "Intern": {
            addIntern();
            break;
          }
          case "Done adding team members": {
            fullTeam();
            break;
          }
        }
      });
  }
  // engineer questions

  function addEngineer() {
    console.log("Enter information for an Engineer");
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is the engineer's first name?",
        },
        {
          type: "input",
          name: "id",
          message: "What is the engineer's ID number?",
        },
        {
          type: "input",
          name: "email",
          message: "What is the engineer's email address?",
        },
        {
          type: "input",
          name: "gitHub",
          message: "What is the engineer's GitHub username?",
        },
      ])
      .then((response) => {
        const engineer = new Engineer(
          response.name,
          response.id,
          response.email,
          response.gitHub
        );
        const engineerCard = engineerSec(engineer);
        employees.push(engineerCard);
        otherEmployee();
      });
  }

  //add an intern
  function addIntern() {
    console.log("Enter information for an intern");
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "what is the intern's first name?",
        },
        {
          type: "input",
          name: "id",
          message: "What is the intern's ID number?",
        },
        {
          type: "input",
          name: "email",
          message: "What is the intern's email address?",
        },
        {
          type: "input",
          name: "school",
          message: "What school is the intern attending?",
        },
      ])
      .then((response) => {
        const intern = new Intern(
          response.name,
          response.id,
          response.email,
          response.school
        );
        const internCard = internSec(intern);
        employees.push(internCard);
        otherEmployee();
      });
  }

  function fullTeam() {
    const completedTeam = employees.join("");
    fs.writeFileSync(outputPath, mainHtml(completedTeam), "utf-8");
  }
}
init();

// function to initiate the html profiles
