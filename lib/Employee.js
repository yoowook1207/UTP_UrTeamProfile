const inquirer = require('inquirer');

class Employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }
    getName() {
       // return
       // HTML section build goes in
    }

    getID() {
        return inquirer
        .prompt({
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
        })
        .then(({id}) => {
            this.Employee = new Employee(id);
        })
    }

    getEmail() {
        return inquirer
        .prompt({
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
        })
        .then(({email}) => {
            this.Employee = new Employee(email);
        })
    }

    getRole() {
        return inquirer
        .prompt({
            type: 'list',
            name: 'role',
            message: "What is the employee's email address? (Required)",
            choices: ['Manager', 'Engineer', 'Intern']
        })

    }
}

new Employee()

module.exports = Employee