const inquirer = require('inquirer');
const generatePage = require('./src/page-template')
const {writeFile, copyFile} = require('./generate-HTML')
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

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
    .then(userData => {
        console.log('Im here')
        if (userData.role === 'Manager') {
            this.manager = new Manager(userData.name, userData.id, userData.email, userData.role, userData.officeNumber)
            this.manager.getRole()
        portfolioData.push(this.manager);
        console.log(portfolioData)
            if (userData.confirmAddEmployee) {
                return promptPortfolio(portfolioData);
            } else {
                return portfolioData;
            }
        }
        else if (userData.role === 'Engineer') {
            this.engineer = new Engineer(userData.name, userData.id, userData.email, userData.role, userData.gitHub)
            this.engineer.getRole()
        portfolioData.push(this.engineer);
        console.log(portfolioData)
            if (userData.confirmAddEmployee) {
                return promptPortfolio(portfolioData);
            } else {
                return portfolioData;
            }
        }
        else if (userData.role === 'Intern') {
            this.intern = new Intern(userData.name, userData.id, userData.email, userData.role, userData.schoolName)
            this.intern.getRole()
        portfolioData.push(this.intern);
        console.log(portfolioData)
            if (userData.confirmAddEmployee) {
                return promptPortfolio(portfolioData);
            } else {
                return portfolioData;
            }
        }
      })
}



promptPortfolio()
    .then(portfolioData => {
        return generatePage(portfolioData);
    })
    .then(pageHTML => {
        return writeFile(pageHTML)
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
        return copyFile();
    })
    .then(copyFileResponse => {
        console.log(copyFileResponse);
    })
    .catch(err => {
    console.log(err);
    });
