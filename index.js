const inquirer = require("inquirer");
const fs = require("fs");

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Employee = require("./lib/Employee");
// const engineerSec = require("./src/templates/engineer.html");
// const internSec = require("./src/templates/intern.html");
// const managerSec = require("./src/templates/manager.html");
// const employeeSec = require("./dist/employeeHtml");
const path = require("path");
const outputPath = path.resolve(__dirname, "output");
const OUTPUT_DIR = path.join(outputPath, "main.html");

const render = require("./lib/htmlRender");

const employees = [];

// building a manager
function init() {
  console.log("Build your team's profiles using the following prompts!");
  inquirer
    .prompt([
      {
        type: "input",
        name: "firstNameManager",
        message: "What is your first name?",
      },
      {
        type: "input",
        name: "idNumberManager",
        message: "What is your employee ID number?",
      },
      {
        type: "input",
        name: "emailManager",
        message: "What is your email address?",
      },
      {
        type: "input",
        name: "officeNumberManager",
        message: "What is your office number?",
      },
    ])
    .then((response) => {
      const managerProfile = new Manager(
        response.firstNameManager,
        response.idNumberManager,
        response.emailManager,
        response.officeNumberManager
      );
      employees.push(managerProfile);
      otherEmployee();
    });
}
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
        name: "engineerName",
        message: "What is the engineer's first name?",
      },
      {
        type: "input",
        name: "engineerId",
        message: "What is the engineer's ID number?",
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "What is the engineer's email address?",
      },
      {
        type: "input",
        name: "engineerGithub",
        message: "What is the engineer's GitHub username?",
      },
    ])
    .then((response) => {
      const engineer = new Engineer(
        response.engineerName,
        response.engineerId,
        response.engineerEmail,
        response.engineerGithub
      );
      employees.push(engineer);
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
        name: "internName",
        message: "what is the intern's first name?",
      },
      {
        type: "input",
        name: "interId",
        message: "What is the intern's ID number?",
      },
      {
        type: "input",
        name: "interEmail",
        message: "What is the intern's email address?",
      },
      {
        type: "input",
        name: "interSchool",
        message: "What school is the intern attending?",
      },
    ])
    .then((response) => {
      const intern = new Intern(
        response.internName,
        response.internId,
        response.internEmail,
        response.internSchool
      );
      employees.push(intern);
      otherEmployee();
    });
}

async function fullTeam() {
  fs.writeFileSync(outputPath, render(employees), function (err) {
    if (err) {
      return console.log(err);
    }
  });
}

init();

// function to initiate the html profiles
