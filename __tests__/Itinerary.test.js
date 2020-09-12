const Itinerary = require('../src/Itinerary.js');
const Port = require('../src/Port.js');

describe('constructor', () => {
    test('creates an object', () => {
        expect(new Itinerary).toBeInstanceOf(Object);
    });
    test('can have ports', () => {
        const dover = jest.fn();
        const calais = jest.fn();
        const itinerary = new Itinerary([dover, calais]);
        expect(itinerary.ports).toEqual([dover, calais]);
    })
})