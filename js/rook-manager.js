function Rook (color, positionX, positionY, alive, image, board) {
    Piece.call(this, color, positionX, positionY, alive, image, board);
}

Rook.prototype = Object.create(Piece.prototype);


Rook.prototype.getPossibleCells = function () {
    var positionX = this.positionX;
    var positionY = this.positionY;
    var possibleCells = [];

    this._checkUpCells(positionX,positionY,possibleCells);
    this._checkDownCells(positionX,positionY,possibleCells);
    this._checkRightCells(positionX,positionY,possibleCells);
    this._checkLeftCells(positionX,positionY,possibleCells);

    return possibleCells;
}

Rook.prototype._checkUpCells = function(positionX,positionY,possibleCells) {
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

Rook.prototype._checkDownCells = function(positionX,positionY,possibleCells) {
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

Rook.prototype._checkRightCells = function(positionX,positionY,possibleCells) {
    for (var i = positionY + 1; i < 9; i++) {
        var cellToCheck = this.board[positionX][i];
        var possibleCell = [positionX,i];
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

Rook.prototype._checkLeftCells = function(positionX,positionY,possibleCells) {
    for (var i = positionY - 1; i > -1; i--) {
        var cellToCheck = this.board[positionX][i];
        var possibleCell = [positionX,i];
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