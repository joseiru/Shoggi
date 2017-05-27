function Rook (color, positionX, positionY, alive, image) {
    Piece.call(this, color, positionX, positionY, alive, image);
}

Rook.prototype = Object.create(Piece.prototype);


Rook.prototype.getPossibleMovements = function () {
    
}