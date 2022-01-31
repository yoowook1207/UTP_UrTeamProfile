const Engineer = require('../lib/Engineer.js');

test('creates an employee information', () => {
    const engineer = new Engineer('Sung', 1, 'yoowook1207@gmail.com', 'Engineer', 'yoowook1207');

    expect(engineer.name).toEqual(expect.stringContaining(engineer.name.toString()));
    expect(engineer.id).toEqual(expect.any(Number))
    expect(engineer.email).toEqual(expect.stringContaining(engineer.email.toString()))
    expect(engineer.role).toBe('Engineer')
    expect(engineer.gitHub).toEqual(expect.stringContaining(engineer.gitHub.toString()))
});