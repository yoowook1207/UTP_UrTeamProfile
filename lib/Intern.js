const Employee = require('./Employee')

class Intern extends Employee {
    constructor(name, id, email, role, schoolName) {
        super(name, id, email, role);
        this.schoolName = schoolName;
    }
    getRole() {
        return `<p class="card-text">&#127891; ${this.role} </p>`
    }
    getSchool() {
        return `<li class="list-group-item">School: ${this.schoolName}</li>`
    }
}

module.exports = Intern