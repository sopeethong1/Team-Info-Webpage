const Engineer = require('../lib/Engineer.js');

describe("Tests to see if engineer class exists", () => {
    it('should be an object', () => {
        const engineerObject = new engineer();
        expect(typeof(engineerObject)).toBe('object');
    })
})