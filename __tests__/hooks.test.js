const mathOperations = require("../calculator");



describe("Calculator Tests",()=>{
    var inp1 = 0;
    var inp2 = 0;

    beforeAll( () => {
        console.log("Before All Called")
    });

    afterAll(() => {
        console.log("AfterAll Called");
    
    });

    beforeEach(() =>{
        console.log("beforeEach called");
        inp1 = 1;
        inp2 = 2;
    });

    afterEach(() =>{
        console.log("AfterEach is called");
    });


    test('add',()=>{
        var res = mathOperations.sum(inp1,inp2);
        expect(res).toBe(3);
    });

    test('diff',()=>{
        var res = mathOperations.diff(inp1,inp2);
        expect(res).toBe(-1);
    });


})