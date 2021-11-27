const fs = require('fs');
const inquirer = require('inquirer');

const promptManager = () => {
    console.log(`
        Please Build Your Team
    `)
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: "What is the team manager's name? (Required)",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the team manager's name!");
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'id',
        message: "What is the team manager's id? (Required)",
        validate: managerID => {
          if (managerID) {
            return true;
          } else {
            console.log("Please enter the team manager's id!");
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: "What is the team manager's email? (Required)",
        validate: managerEmail => {
          if (managerEmail) {
            return true;
          } else {
            console.log("Please enter the team manager's email!");
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'office',
        message: "What is the team manager's office number? (Required)",
        validate: managerOffice => {
          if (managerOffice) {
            return true;
          } else {
            console.log("Please enter the team manager's office number!");
            return false;
          }
        }
      }
    ]);
  };

  promptManager();