const ManagerArray = require('../index');
const Manager = require('../lib/Manager');

describe("work", () => {
    it("works", () => {
        const ManagerArray = [
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
        expect(ManagerArray.length === 4).toEqual(true);
    });
    it("work", () => {
        cconst ManagerArray = [
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
          for (i=0; i < ManagerArray.length; i++) {
            var newManager = new Manager(ManagerArray[i].name, ManagerArray[i].id, ManagerArray[i].email, ManagerArray[i].type);
            console.log(newManager);
          }
    expect(newManager.name = 'Sopee');
    });

}