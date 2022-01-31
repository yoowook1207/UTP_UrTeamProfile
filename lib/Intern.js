const Employee = require('./Employee')

class Intern extends Employee {
    constructor(name, id, email, role, schoolName) {
        super(name, id, email, role);
        this.schoolName = schoolName;
    }
}

module.exports = Intern