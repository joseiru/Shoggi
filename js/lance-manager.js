function Lance (color, positionX, positionY, alive, image) {
    Piece.call(this, color, positionX, positionY, alive, image);
}

Lance.prototype = Object.create(Piece.prototype);


Lance.prototype.getPossibleMovements = function () {
    
}