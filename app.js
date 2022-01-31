const inquirer = require('inquirer');
const Employee = require('./lib/Employee.js');

const promptPortfolio = portfolioData => {
    if (!portfolioData) {
        portfolioData= [];
    }
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the employee's name? (Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("You need to enter an employee's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What id number is given to this employee? (Required)",
            validate: idInput => {
                if (isNaN(idInput)) {
                    console.log("You need to enter an employee's id number!");
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the employee's email address? (Required)",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("You need to enter an employee's email address!");
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'role',
            message: "What is the employee's role? (Required)",
            choices: ['Manager', 'Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is this manager's office number? (Required)",
            validate: ofNum => {
                if (isNaN(ofNum)) {
                    console.log("You need to enter numbers!");
                    return false;
                } else {
                    return true;
                }
            },
            when: ({role}) => {
                if (role==='Manager') {
                    return true}
                else {
                    return false}
                }
        },
        {
            type: 'input',
            name: 'gitHub',
            message: "What is this engineer's github id? (Required)",
            validate: gitHubId => {
                if (gitHubId) {
                    return true
                } else {
                    console.log("You need to enter an engineer's github id!")
                    return false;
                }
            },
            when: ({role}) => {
                if (role==='Engineer') {
                    return true}
                else {
                    return false}
                }
        },
        {
            type: 'input',
            name: 'schoolName',
            message: "What is this intern's school name? (Required)",
            validate: nameSchool => {
                if (nameSchool) {
                    return true
                } else {
                    console.log("You need to enter an intern's school name!")
                    return false;
                }
            },
            when: ({role}) => {
                if (role==='Intern') {
                    return true}
                else {
                    return false}
                }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add another employee?',
            default: false
        }
    ])
    .then(() => {
        // if (userInfo.role === 'Manager') {
        //     return managerQuestion()
        // }
        // else if (userInfo.role === 'Engineer') {
        //     return engineerQuestion()
        // }
        // else if (userInfo.role === 'Intern') {
        //     return internQuestion()
        // }

        if (this.role === 'Manager') {
        portfolioData.push(new Manager(name, id, email, role, officeNumber));
            if (this.confirmAddEmployee) {
                return promptPortfolio(portfolioData);
            } else {
                return portfolioData;
            }
        }
        else if (this.role === 'Engineer') {
        portfolioData.push(new Engineer(name, id, email, role, gitHub));
            if (this.confirmAddEmployee) {
                return promptPortfolio(portfolioData);
            } else {
                return portfolioData;
            }
        }
        else if (this.role === 'Intern') {
        portfolioData.push(new Intern(name, id, email, role, schoolName));
            if (this.confirmAddEmployee) {
                return promptPortfolio(portfolioData);
            } else {
                return portfolioData;
            }
        }
      })
}



promptPortfolio()