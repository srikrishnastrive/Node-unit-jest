const mathOperations = require('../calculator');

//describe --> calculation 

//math operatopm
describe('calculator Tests',()=>{
    test('adding 1 + 2 should return 3',() => {
        expect(mathOperations.sum(1,2)).toBe(3);
        expect(mathOperations.sum(1,4)).not.toBe(10);
    })


    test('subtractoin Tests',()=>{
        var result = mathOperations.diff(10,2);
        expect(result).toBe(8);
    })
})