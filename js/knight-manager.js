function Knight (color, positionX, positionY, alive, image, board) {
    Piece.call(this, color, positionX, positionY, alive, image, board);
}

Knight.prototype = Object.create(Piece.prototype);


Knight.prototype.getPossibleCells = function () {
    var directionsWhite = [[2,-1],[2,1]];
    var directionsBlack = [[-2,-1],[-2,1]];
    var possibleCells = [];
    var that = this;

    if (this.color === "W") {
        this._getPossibleCellsByColor(directionsWhite,possibleCells);
    } else {
        this._getPossibleCellsByColor(directionsBlack,possibleCells);
    }
    return possibleCells;
}

Knight.prototype._getPossibleCellsByColor = function(directions, possibleCells) {

    var that = this;

    directions.forEach(function(direction) {
        var possiblePositionX = that.positionX + direction[0];
        var possiblePositionY = that.positionY + direction[1];
        var cellIsInsideBoard = Piece.prototype.isInsideBoard(possiblePositionX,possiblePositionY);

        if (cellIsInsideBoard) {
            var cellToCheck = that.board[possiblePositionX][possiblePositionY];
            var cellIsOponent = false;

            if ((cellToCheck !== null) && (cellToCheck !== undefined)) {
                cellIsOponent = that.isOpponent(cellToCheck.color);
            }
            if ((cellToCheck === null) || (cellToCheck === undefined) || (cellIsOponent === true)) {
                var possibleCell = [];
                possibleCell.push(possiblePositionX);
                possibleCell.push(possiblePositionY);
                possibleCells.push(possibleCell);
            }
        } 
    });
}