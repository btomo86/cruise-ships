const Ship = require('../src/Ship.js')
const Port = require('../src/Port.js')
const Itinerary = require('../src/Itinerary');

describe('Ship', () => {
    test('can be instantiated', () => {
      const port = new Port('Dover');
      const itinerary = new Itinerary([port]);
      const ship = new Ship(itinerary);
      expect(ship).toBeInstanceOf(Object);
    });
    test('has a starting port', () => {
      const port = new Port('Dover');
      const itinerary = new Itinerary([port]);
      const ship = new Ship(itinerary);
      expect(ship.currentPort).toBe(port);
    });
    test('it can set sail', () => {
      const dover = new Port('Dover');
      const calais = new Port('Calais');
      const itinerary = new Itinerary([dover, calais]);
      const ship = new Ship(itinerary);
      ship.setSail();
      expect(ship.currentPort).toBeFalsy();
    });
     
      
    
    test('Can dock at different port', () => {
      const dover = new Port('Dover');
      const calais = new Port('Calais');
      const itinerary = new Itinerary([dover, calais])
      const ship = new Ship(itinerary);
      ship.setSail();
      ship.dock();
      expect(ship.currentPort).toBe(calais);
    });
    test('can\'t sail further than its ininerary', () => {
      const dover = new Port('Dover');
      const calais = new Port('Calais');
      const itinerary = new Itinerary([dover, calais]);
      const ship = new Ship(itinerary);
      ship.setSail();
      ship.dock();
      expect(()=> ship.setSail()).toThrowError('End of itinerary reached');
    })
    })
  