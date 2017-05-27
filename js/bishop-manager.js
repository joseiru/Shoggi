function Bishop (color, positionX, positionY, alive, image) {
    Piece.call(this, color, positionX, positionY, alive, image);
}

Bishop.prototype = Object.create(Piece.prototype);


Bishop.prototype.getPossibleMovements = function () {
    
}