function King (color, positionX, positionY, alive, image) {
    Piece.call(this, color, positionX, positionY, alive, image);
}

King.prototype = Object.create(Piece.prototype);

King.prototype.getPossibleCells = function () {
    var directions = [[-1,-1],[-1,0],[-1,1],[0,1],[1,1],[1,0],[1,-1],[0,-1]];
    var possibleCells = [];

    directions.forEach(function(direction){
        var x = this.positionX + direction[0];
        var y = this.positionY + direction[1];
        if (this.isInsideBoard(x,y)) {
            posibleCelss = [x,y];
        }
    });
    return possibleCells;
}

