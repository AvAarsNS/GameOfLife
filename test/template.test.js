const isTheCellAlive = require('../src/template');

describe('When we play the game of life, we want to be able to determine whether a cell is dead or alive', () => {
    it('▓ -> not alive', () => {
        expect(isTheCellAlive(0)).toEqual(false);        
    });
    it('░ -> alive', () => {
        expect(isTheCellAlive(1)).toEqual(true);        
    });
});