const Port = require('../src/Port.js')


describe('constructor', () => {
    test('returns port as an object', () => {
      expect(new Port()).toBeInstanceOf(Object);
    });
    it('has a name', () => {
      expect(new Port('Dover').name).toBe('Dover');
  });
  test('can add a ship', () => {
    const port = new Port('Dover');
    const ship = {};
    port.addShip(ship);
    expect(port.ships).toContain(ship);
  })
  test('can remove a Ship', () => {
    const port = new Port('Dover');
    const titanic = {};
    const queenMary = {};
    port.addShip(titanic);
    port.addShip(queenMary);
    port.removeShip(queenMary);
    expect(port.ships).toEqual([titanic]);
  })
})