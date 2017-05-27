function GoldGeneral (color, positionX, positionY, alive, image) {
    Piece.call(this, color, positionX, positionY, alive, image);
}

GoldGeneral.prototype = Object.create(Piece.prototype);


GoldGeneral.prototype.getPossibleMovements = function () {
    
}