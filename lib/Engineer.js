const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name, id, email, role, gitHub) {
        super(name, id, email, role);
        this.gitHub = gitHub;
    }
    getRole() {
        this.role = `<p class="card-text">&#128083; ${this.role} </p>`
    }
    getGithub() {
        return `<li class="list-group-item">GitHub: <a href="https://github.com/${this.gitHub}" target="_blank" class="card-link">${this.gitHub}</a></li>`
    }
}

module.exports = Engineer