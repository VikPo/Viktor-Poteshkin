const calc = require('../tests/app/calculator');
const assert = require('chai').assert;


const divTestData = [
    { a: 2, b: 1, res: 2 },
    { a: 10, b: 5, res: 2 },
    { a: 1, b: 2, res: .5 },
    { a: 100, b: 2, res: 50 },

]

const subTestData = [
    { a: 2, b: 1, res: 1 },
    { a: 10, b: 5, res: 5 },
    { a: 1, b: 2, res: -1 },
    { a: 100, b: 0, res: 100 },

]

// describe('calculator', () => {

//     for (let i = 0; i < sumTestData.length; i++) {
//         const { a, b, res } = sumTestData[i];


//         it(`add ${a} + ${b} to equal ${res}`, () => {
//             console.log('test1')
//            //s expect(calc.sum(a, b)).toBe(res);

//             assert.equal(calc.sum(a,b), res, 'text of error')

//         })
//     }

// })
describe('calculatoForDivision', () => {

    for (let i = 0; i < divTestData.length; i++) {
        const { a, b, res } = divTestData[i];


        it(`add ${a} / ${b} to equal ${res}`, () => {
            console.log('test1')
            assert.equal(calc.division(a, b), res, 'text of error')

        })
    }

})

describe('calculatorForSubstracting', () => {
    for (let i = 0; i < subTestData.length; i++) {
        const { a, b, res } = subTestData[i];
    
    it(`add ${a} - ${b} to equal ${res}`, () => {
        assert.equal(calc.subtracting(a, b), res, 'text of error')
    })
    }})
