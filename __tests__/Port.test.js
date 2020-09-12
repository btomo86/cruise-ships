const Port = require('../src/Port.js')
const Ship = require('../src/Ship.js')


describe('constructor', () => {
  let port;
  
 

  beforeEach(() => {
    port = new Port('Dover');
    
  });
  test('returns port as an object', () => {
      expect(port).toBeInstanceOf(Object);
    });
    it('has a name', () => {
      expect(new Port('Dover').name).toBe('Dover');
  });
  test('can add a ship', () => {
    const ship = {};
    port.addShip(ship);
    expect(port.ships).toContain(ship);
  })
  test('can remove a Ship', () => {
    const titanic = {};
    const queenMary = {};
    port.addShip(titanic);
    port.addShip(queenMary);
    port.removeShip(queenMary);
    expect(port.ships).toEqual([titanic]);
  })
})