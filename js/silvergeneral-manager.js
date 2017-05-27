function SilverGeneral (color, positionX, positionY, alive, image) {
    Piece.call(this, color, positionX, positionY, alive, image);
}

SilverGeneral.prototype = Object.create(Piece.prototype);


SilverGeneral.prototype.getPossibleMovements = function () {
    
}