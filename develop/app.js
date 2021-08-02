const employee = require("./lib/Employee");
const engineer = require("./lib/Engineer");
const intern = require("./lib/Intern");
const manager = require("./lib/Manager");
const mainHTML = require("./templates/mainHTML");
const render = require("./lib/htmlRenderer");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const Choices = require("inquirer/lib/objects/choices");
const { create } = require("domain");

const engineerCard = require("./templates/engineerHTML");
const internCard = require("./templates/internHTML");
const managerCard = require("./templates/managerHTML");

const fullTeam = [];

const mainApp = () => {
  console.log("Start Building Your Team!");
  inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is your manager's name?",
      },
      {
        type: "input",
        name: "managerID",
        message: "What is your manager's employee ID?",
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is your manager's email address?",
      },
      {
        type: "input",
        name: "managerOfficeNumber",
        message: "What is your manager's office number?",
      },
    ])
    .then((questions) => {
      const manager = new Manager(
        questions.managerName,
        questions.managerID,
        questions.managerEmail,
        questions.managerOfficeNumber
      );
      const managerCardHTML = managerCard(manager);
      fullTeam.push(managerCardHTML);
      addTeamMembers();
    });

  function addTeamMembers() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "addMembers",
          message: "Would you like to:",
          choices: ["Add an Engineer", "Add an Intern", "View Current Team"],
        },
      ])
      .then((answers) => {
        switch (answers.addMembers) {
          case "Add an Engineer": {
            promptEngineer();
            break;
          }
          case "Add an Intern": {
            promptIntern();
            break;
          }
          case "View Current Team": {
            buildTeam();
            break;
          }
        }
      });
  }

  const promptEngineer = () => {
    console.log("Engineer info");
    inquirer
      .prompt([
        {
          type: "input",
          name: "engineerName",
          message: "What is your engineer's name?",
        },
        {
          type: "input",
          name: "engineerID",
          message: "What is your engineer's employee ID?",
        },
        {
          type: "input",
          name: "engineerEmail",
          message: "What is your engineer's email address?",
        },
        {
          type: "input",
          name: "engineerGithub",
          message: "What is your engineer's GitHub username?",
        },
      ])
      .then((response) => {
        const engineer = new Engineer(
          response.engineerName,
          response.engineerID,
          response.engineerEmail,
          response.engineerGithub
        );
        const engineerCardHTML = engineerCard(engineer);
        fullTeam.push(engineerCardHTML);
        addTeamMembers();
      });
  };

  const promptIntern = () => {
    console.log("Intern info");
    inquirer
      .prompt([
        {
          type: "input",
          name: "internName",
          message: "What is your intenr's name?",
        },
        {
          type: "input",
          name: "internID",
          message: "What is your intern's employee ID?",
        },
        {
          type: "input",
          name: "internEmail",
          message: "What is your intern's email address?",
        },
        {
          type: "input",
          name: "internSchool",
          message: "What school does your intern attend?",
        },
      ])
      .then((response) => {
        const intern = new Intern(
          response.internName,
          response.internID,
          response.intenrEmail,
          response.internSchool
        );
        const internCardHTML = internCard(intern);
        fullTeam.push(internCardHTML);
        addTeamMembers();
      });
  };

  function buildTeam() {
    const finalTeam = fullTeam.join("");
    fs.writeFileSync(outputPath, mainHTML(finalTeam), "utf-8");
  }
};

mainApp();
