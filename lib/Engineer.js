const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name, id, email, role, gitHub) {
        super(name, id, email, role);
        this.gitHub = gitHub;
    }
}

module.exports = Engineer