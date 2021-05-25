const InternArray = require('../index');
const Intern = require('../lib/Intern');

describe("work", () => {
    it("works", () => {
        const InternArray = [
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
        expect(InternArray.length === 4).toEqual(true);
    });
    it("work", () => {
        cconst InternArray = [
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
          for (i=0; i < InternArray.length; i++) {
            var newIntern = new Intern(InternArray[i].name, InternArray[i].id, InternArray[i].email, InternArray[i].type);
            console.log(newIntern);
          }
    expect(newIntern.name = 'Sopee');
    });

}