const Ship = require('../src/Ship.js')
const Port = require('../src/Port.js')
const Itinerary = require('../src/Itinerary');

describe('Ship', () => {
  describe('with ports and an itinerary', () => {
    let ship;
    let dover;
    let calais;
    let itinerary;
  
    beforeEach(() => {
      dover = new Port('Dover');
      calais = new Port('Calais');
      itinerary = new Itinerary([dover, calais]);
      ship = new Ship(itinerary)
    });
  
    
  });
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
      ship.setSail();
      expect(ship.currentPort).toBeFalsy();
      expect(dover.ships).not.toContain(ship);
    });
     
      
    
    test('Can dock at different port', () => {
      ship.setSail();
      ship.dock();
      expect(ship.currentPort).toBe(calais);
      expect(calais.ships).toContain(ship);
    });
    test('can\'t sail further than its ininerary', () => {
      ship.setSail();
      ship.dock();
      expect(()=> ship.setSail()).toThrowError('End of itinerary reached');
    })
    test('gets added to port on instantiation', () => {
      const dover = new Port('Dover');
      const itinerary = new Itinerary([dover]);
      const ship = new Ship(itinerary);
      expect(dover.ships).toContain(ship);
    })
    })
  