const Employee = require('../lib/Employee.js');

// jest.mock('../lib/Employee.js')

test('creates an employee information', () => {
    const employee = new Employee('Sung', 1, 'yoowook1207@gmail.com', 'Manager');

    expect(employee.name).toEqual(expect.stringContaining(employee.name.toString()));
    expect(employee.id).toEqual(expect.any(Number))
    expect(employee.email).toEqual(expect.stringContaining(employee.email.toString()))
    expect(employee.role).toEqual(expect.stringContaining(employee.role.toString()))
});