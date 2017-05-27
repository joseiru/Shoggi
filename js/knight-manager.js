function Knight (color, positionX, positionY, alive, image) {
    Piece.call(this, color, positionX, positionY, alive, image);
}

Knight.prototype = Object.create(Piece.prototype);


Knight.prototype.getPossibleMovements = function () {
    
}