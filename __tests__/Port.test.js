const Port = require('../src/Port.js')


describe('constructor', () => {
    test('returns port as an object', () => {
      expect(new Port()).toBeInstanceOf(Object);
    });
    it('has a name', () => {
      expect(new Port('Dover').name).toBe('Dover');
  });
})