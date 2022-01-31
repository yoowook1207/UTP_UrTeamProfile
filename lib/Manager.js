const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name, id, email, role, officeNumber) {
        super(name, id, email, role);
        this.officeNumber = officeNumber;
    }
    getRole() {
        return `<p class="card-text"> &#9749; ${this.role} </p>`
    }
    getOfficeNumber() {
        return `<li class="list-group-item">Office Number: ${this.officeNumber}</li>`
    }
}

module.exports = Manager