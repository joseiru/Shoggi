function Pawn (color, positionX, positionY, alive, image) {
    Piece.call(this, color, positionX, positionY, alive, image);
}

Pawn.prototype = Object.create(Piece.prototype);

Pawn.prototype.getPossibleCells = function () {
    var possibleCells = [];
    if (this.color = "B") {
        possibleCells.push([this.positionX+1, this.positionY]);
    } else if (this.color = "W"){
        possibleCells.push([this.positionX-1, this.positionY]);
    }
    return possibleCells;
}