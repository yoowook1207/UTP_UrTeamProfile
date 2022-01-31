const inquirer = require('inquirer');

class Employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }
    getName() {
       return `<h5 class="card-title">${this.name}</h5>`
    }

    getID() {
        return `<li class="list-group-item">ID: ${this.id}</li>`
    }

    getEmail() {
        return `<li class="list-group-item">Email: <a href="mailto:${this.email}" class="card-link">${this.email}</a></li>`
    }

    getRole() {
        return `Employee`
    }
}

new Employee()

module.exports = Employee