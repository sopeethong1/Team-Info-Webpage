const employeeArray = require('../index');
const Employee = require('../lib/employee');

describe("work", () => {
    it("works", () => {
        const employeeArray = [
                {
                  name: 'Sopee',
                  id: '222',
                  email: 'tsopee@gmail.com',
                  officeNum: 8,
                  empPosition: 'Engineer',
                  type: 'Manager'
                },
                {
                  name: 'Tommy',
                  id: '333',
                  email: 'tt@gmail.com.com',
                  github: 'https://tt.github.io',
                  addMore: 'yes',
                  type: 'engineer'
                },
                {
                  name: 'Labat',
                  id: '444',
                  email: 'labat@gmail.com',
                  school: 'UNC Chapel Hill',
                  addMore: 'yes',
                  type: 'Intern'
                },
                {
                  name: 'Sandy',
                  id: '555',
                  email: 'Sandy@gmail.com',
                  school: 'Tech',
                  addMore: 'no',
                  type: 'Intern'
                }
              ];
        expect(employeeArray.length === 4).toEqual(true);
    });
    it("work", () => {
        cconst employeeArray = [
          {
            name: 'Sopee',
            id: '222',
            email: 'tsopee@gmail.com',
            officeNum: 8,
            empPosition: 'Engineer',
            type: 'Manager'
          },
          {
            name: 'Tommy',
            id: '333',
            email: 'tt@gmail.com.com',
            github: 'https://tt.github.io',
            addMore: 'yes',
            type: 'engineer'
          },
          {
            name: 'Labat',
            id: '444',
            email: 'labat@gmail.com',
            school: 'UNC Chapel Hill',
            addMore: 'yes',
            type: 'Intern'
          },
          {
            name: 'Sandy',
            id: '555',
            email: 'Sandy@gmail.com',
            school: 'Ogelthorpe',
            addMore: 'no',
            type: 'Intern'
          }
        ];
          for (i=0; i < employeeArray.length; i++) {
            var newEmployee = new Employee(employeeArray[i].name, employeeArray[i].id, employeeArray[i].email, employeeArray[i].type);
            console.log(newEmployee);
          }
    expect(newEmployee.name = 'Sopee');
    });
  }