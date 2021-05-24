const employeeArray = require('../index');
const Employee = require('../lib/employee');

describe("takes in employee array and assigns it to a class of employee", () => {
    it("should take in the employee array", () => {
        const employeeArray = [
                {
                  name: 'Liz',
                  id: '2',
                  email: 'uknity@gmail.com',
                  officeNum: 8,
                  empPosition: 'engineer',
                  type: 'manager'
                },
                {
                  name: 'Myrtle',
                  id: '4',
                  email: 'myrtle@hotmail.com',
                  github: 'https://myrtle.github.io',
                  addMore: 'yes',
                  type: 'engineer'
                },
                {
                  name: 'Liam',
                  id: '99',
                  email: 'liam@mischief.com',
                  school: 'Mom U',
                  addMore: 'yes',
                  type: 'intern'
                },
                {
                  name: 'Julia',
                  id: '38',
                  email: 'juliabirchler@gmail.com',
                  school: 'Liz U',
                  addMore: 'no',
                  type: 'intern'
                }
              ];
        expect(employeeArray.length === 4).toEqual(true);
    });
    it("should loop through the employee array and add each employee as a new employee", () => {
        const employeeArray = [
            {
              name: 'Sopee',
              id: '500',
              email: 'tsopee@gmail.com',
              officeNum: 8,
              empPosition: 'Developer',
              type: 'Manager'
            },
            {
              name: 'Tommy',
              id: '200',
              email: 'TT@gmail.com.com',
              github: 'https://tommyt.github.io',
              addMore: 'yes',
              type: 'engineer'
            },
            {
              name: 'Labat',
              id: '400',
              email: 'yancey@gmail.com.com',
              school: 'UNC Chapel Hill',
              addMore: 'yes',
              type: 'intern'
            },
            {
              name: 'Sandy',
              id: '600',
              email: 'sandy@gmail.com',
              school: 'South University",
              addMore: 'no',
              type: 'intern'
            }
          ];

          for (i=0; i < employeeArray.length; i++) {
            var newEmployee = new Employee(employeeArray[i].name, employeeArray[i].id, employeeArray[i].email, employeeArray[i].type);
            console.log(newEmployee);
          }
    expect(newEmployee.name = 'Sopee');
    });

}