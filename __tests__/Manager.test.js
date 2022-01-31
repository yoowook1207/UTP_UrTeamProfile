const Manager = require('../lib/Manager.js');

test('creates an employee information', () => {
    const manager = new Manager('Sung', 1, 'yoowook1207@gmail.com', 'Manager', 'yoowook1207');

    expect(manager.name).toEqual(expect.stringContaining(manager.name.toString()));
    expect(manager.id).toEqual(expect.any(Number))
    expect(manager.email).toEqual(expect.stringContaining(manager.email.toString()))
    expect(manager.role).toBe('Manager')
    expect(manager.officeNumber).toEqual(expect.stringContaining(manager.officeNumber.toString()))
});