const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');


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

  const promptEngineer = () => {
    return inquirer.prompt([
        {
        type: 'input',
        name: 'name',
        message: "What is your engineers name? (Required)",
        validate: engineerName => {
            if (engineerName) {
            return true;
            } else {
            console.log("Please enter the engineers name!");
            return false;
            }
            }
        },
        {
        type: 'input',
        name: 'ID',
        message: "What is your engineers id? (Required)",
        validate: engineerID => {
            if (engineerID) {
            return true;
            } else {
            console.log("Please enter the engineers id!");
            return false;
            }
            }
        },
        {
        type: 'input',
        name: 'email',
        message: "What is your engineers email? (Required)",
        validate: engineerEmail => {
            if (engineerEmail) {
            return true;
            } else {
            console.log("Please enter the engineers email!");
            return false;
            }
            }
        },
        {
        type: 'input',
        name: 'github',
        message: "What is your engineers github username? (Required)",
        validate: engineerGithub => {
            if (engineerGithub) {
            return true;
            } else {
            console.log("Please enter the engineers github username!");
            return false;
            }
            }
        }
    ])
  }

  const promptIntern = () => {
      return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is your interns name? (Required)",
            validate: internName => {
                if (internName) {
                return true;
                } else {
                console.log("Please enter the interns name!");
                return false;
                }
                }
            },
        {
            type: 'input',
            name: 'email',
            message: "What is your interns email? (Required)",
            validate: internEmail => {
                if (internEmail) {
                return true;
                } else {
                console.log("Please enter the interns email!");
                return false;
                }
                }
            },
        {
            type: 'input',
            name: 'id',
            message: "What is your interns id? (Required)",
            validate: internID => {
                if (internID) {
                return true;
                } else {
                console.log("Please enter the interns id!");
                return false;
                }
                }
            },
        {
            type: 'input',
            name: 'school',
            message: "What is your interns school? (Required)",
            validate: internSchool => {
                if (internSchool) {
                return true;
                } else {
                console.log("Please enter the interns school!");
                return false;
                }
                }
            },
      ])
  }

  promptManager();
  promptEngineer();
  promptIntern();