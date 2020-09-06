const Ship = require('../src/Ship.js')
const Port = require('../src/Port.js')

describe('constructor', () => {
    test('returns an object', () => {
      expect(new Ship()).toBeInstanceOf(Object);
    });
    test('it has a startPoint', () => {
        const port = new Port('Dover')
        const ship = new Ship(port);
        expect(ship.currentPort).toBe(port);
    })
    test('it can set sail', () => {
      const port = new Port('Dover');
      const ship = new Ship(port);
      ship.setSail();
      expect(ship.currentPort).toBe(false);
    });
    test('Can dock at different port', () => {
      const dover = new Port('dover');
      const ship = new Ship(dover);
      const calis = new Port('calais');
      ship.dock(calis);
      expect(ship.currentPort.name).toBe('calais');
    });
    })
  