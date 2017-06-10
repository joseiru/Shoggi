function Lance (color, positionX, positionY, alive, image, board) {
    Piece.call(this, color, positionX, positionY, alive, image, board);
}

Lance.prototype = Object.create(Piece.prototype);


Lance.prototype.getPossibleCells = function () {
    var positionX = this.positionX;
    var positionY = this.positionY;
    var possibleCells = [];

    if (this.color === "W") {
        this._getPossibleCellsWhite(possibleCells, positionX, positionY);
    } else if (this.color === "B") {
        this._getPossibleCellsBlack(possibleCells, positionX, positionY);
    }
    
    return possibleCells;  
}

Lance.prototype._getPossibleCellsWhite = function(possibleCells, positionX, positionY) {
    for (var i = positionX + 1; i < 9; i++) {
        var cellToCheck = this.board[i][positionY];
        var possibleCell = [i,positionY];
        if (cellToCheck == null) {
            possibleCells.push(possibleCell);
        } else if (this.isOpponent(cellToCheck.color)) {
            possibleCells.push(possibleCell);
            break;
        } else {
            break;
        }
    }    
}

Lance.prototype._getPossibleCellsBlack = function(possibleCells, positionX, positionY) {
    for (var i = positionX - 1; i > -1; i--) {
        var cellToCheck = this.board[i][positionY];
        var possibleCell = [i,positionY];
        if (cellToCheck == null) {
            possibleCells.push(possibleCell);
        } else if (this.isOpponent(cellToCheck.color)) {
            possibleCells.push(possibleCell);
            break;
        } else {
            break;
        }
    }   
}