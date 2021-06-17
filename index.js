const inquirer = require("inquirer");
const fs = require("fs");

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Employee = require("./lib/Employee");

const engineerSec = require("./dist/engineerHtml");
const internSec = require("./dist/internHtml");
const managerSec = require("./dist/managerHtml");
const employeeSec = require("./dist/employeeHtml");

const outputPath = path.resolve(__dirname, 'output', 'teamProfile.html');

const employees = [];

// building a manager
function init() {
  console.log("Build your team's profiles using the following prompts!");
  inquirer.prompt([
    {
      type: "input",
      name: "firstNameManager",
      message: "What is your first name?",
      validate: 
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
  .then(response => {
    const managerProfile = new Manager(
      response.firstNameManager,
      response.idNumberManager,
      response.emailManager,
      response.officeNumberManager
    );
    const managerHtml = managerSec(managerProfile);
    employees.push(managerHtml);
    otherEmployee();
  });

}
// next, enter other employees or select done
function otherEmployee() {
  inquirer.prompt([
    {
      type: "list",
      name: "otherEmployees",
      message: "Which of the following roles would you like to add to your team?",
      choices:['Engineer', 'Intern', 'Done adding team members']
    },
  ])
  .then(answers => {
    switch (answers.otherEmployee){
      case 'Engineer':{
        addEngineer();
        break;
      }
      case 'Inter':{
        addIntern();
        break;
      }
      case 'Done adding team members':{
      fullTeam();
      break;
    } 
    }
  });
  }
// engineer questions

function addEngineer() {
  console.log('Enter information for an Engineer')
inquirer.prompt([
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
.then(response => {
  const engineer = new Engineer(
    response.engineerName,
    response.engineerId,
    response.engineerEmail,
    response.engineerGithub,
  );
  const engineerHtml = engineerSec(engineer);
 employees.push(engineerHtml);
 otherEmployee();   
});
};

//add an intern
function addIntern() {
  console.log('Enter information for an intern')
  inquirer.prompt([
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
  .then(response => {
    const intern = new Intern(
      response.internName,
      response.internId,
      response.internEmail,
      response.internSchool
    );
    const internHtml = internSec(intern);
    employees.push(internHtml);
    otherEmployee();
  });
  };

  function fullTeam(){
    const teamComplete = employees.join('');
    fs.writeFileSync(outputPath, profileHtml(teamComplete), 'utf-8')
  };

  init();

  // function to initiate the html profiles