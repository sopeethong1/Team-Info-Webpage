const Employee = require('../lib/employee.js');

describe("Tests to see if employee class exists", () => {
    it('should be an object', () => {
        const employeeObject = new Employee();
        expect(typeof(employeeObject)).toBe('object');
    })
})