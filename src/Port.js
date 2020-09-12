class Port {
    constructor(name) {
        this.name = name;
        this.ships = [];
        
       
}
addShip(shipName) {
    this.ships.push(shipName);
}
removeShip(shipName) {
    this.ships.splice(this.ships.indexOf(shipName),1);
}
};


module.exports = Port;