'use strict';

const {
    multiBracketValidation
} = require('../multi-bracket-validation');

describe('multiBracketValidation', () => {
    it('should return true for these test', () => {
        expect(multiBracketValidation('{}')).toBeTruthy()
        expect(multiBracketValidation('{}(){}')).toBeTruthy()
        expect(multiBracketValidation('()[[Extra Characters]]')).toBeTruthy()
        expect(multiBracketValidation('(){}[[]]')).toBeTruthy()
        expect(multiBracketValidation('{}{Code}[Fellows](())')).toBeTruthy()
    });
    it('should return false for these tests', () => {
        
        expect(multiBracketValidation('[({}]')).toBeFalsy()
        expect(multiBracketValidation('(](')).toBeFalsy()
        expect(multiBracketValidation('{(})')).toBeFalsy()
        expect(multiBracketValidation('{')).toBeFalsy()
        expect(multiBracketValidation(')')).toBeFalsy()
        expect(multiBracketValidation('[}')).toBeFalsy()
    });
    it('should throw error for empty arg list', () => {
        expect(() => {
            multiBracketValidation()
        }).toThrow();
        expect(() => {
            multiBracketValidation('')
        }).toThrow();
        expect(() => {
            multiBracketValidation(1)
        }).toThrow();
    });
});