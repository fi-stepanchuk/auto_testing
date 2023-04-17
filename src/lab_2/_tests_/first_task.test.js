 const {getFullName} = require('../first_task')
 
describe("First task with arguments", ()=>{
    const expectedName = 'Andrii';
    const expectedLastname = 'Stepanchuk';

    it('Function calls mock function with uncorrect agruments', () => {
        const mockGetNameAndLastname = jest.fn();
    
        getFullName(expectedName, expectedLastname, mockGetNameAndLastname); 
      
        expect(mockGetNameAndLastname).toHaveBeenCalledWith(expectedName, expectedLastname);
    });

    it("Function calls mock function with uncorrect agruments", () => {
        const mockGetNameAndLastname = jest.fn();

        getFullName('expectedName', 'expectedLastname', mockGetNameAndLastname); 

        expect(mockGetNameAndLastname).not.toHaveBeenCalledWith(expectedName, expectedLastname);
    });
});
