const Intern = require('../lib/Intern.js');

test('creates an employee information', () => {
    const intern = new Intern('Sung', 1, 'yoowook1207@gmail.com', 'Intern', 'yoowook1207');

    expect(intern.name).toEqual(expect.stringContaining(intern.name.toString()));
    expect(intern.id).toEqual(expect.any(Number))
    expect(intern.email).toEqual(expect.stringContaining(intern.email.toString()))
    expect(intern.role).toBe('Intern')
    expect(intern.schoolName).toEqual(expect.stringContaining(intern.schoolName.toString()))
});