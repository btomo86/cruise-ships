const Ship = require('../src/Ship.js');

describe('constructor', () => {
    test('returns an object', () => {
      expect(new Ship('Alicia-Rose')).toBeInstanceOf(Object);
    });
    test('it has a startPoint', () => {
        const ship = new Ship('Amsterdam')
        expect(ship.startingPort).toBe('Amsterdam')
    })
  });