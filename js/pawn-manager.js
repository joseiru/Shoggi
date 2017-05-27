function Pawn (color, positionX, positionY, alive, image) {
    Piece.call(this, color, positionX, positionY, alive, image);
}

Pawn.prototype = Object.create(Piece.prototype);

Pawn.prototype.getPossibleCells = function () {
    var possibleCells = [];
    if (this.color = "B") {
        possibleCells = [this.positionX, this.positionY - 1];
    } else if (this.color = "W"){
        possibleCells = [this.positionX, this.positionY + 1];
    }
    return possibleCells;
}