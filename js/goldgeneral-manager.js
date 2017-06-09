function GoldGeneral (color, positionX, positionY, alive, image, board) {
    Piece.call(this, color, positionX, positionY, alive, image, board);
}

GoldGeneral.prototype = Object.create(Piece.prototype);


GoldGeneral.prototype.getPossibleCells = function () {
    var directionsWhite = [[-1,0],[0,1],[1,1],[1,0],[1,-1],[0,-1]];
    var directionsBlack = [[-1,-1],[-1,0],[-1,1],[0,1],[1,0],[0,-1]];
    var possibleCells = [];

    if (this.color === "W") {
        possibleCells = Piece.prototype._getPossibleCellsWithDirections(this,directionsWhite);
    } else {
        possibleCells = Piece.prototype._getPossibleCellsWithDirections(this,directionsBlack);
    }
  
    return possibleCells;
}