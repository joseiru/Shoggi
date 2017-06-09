function Bishop (color, positionX, positionY, alive, image, board) {
    Piece.call(this, color, positionX, positionY, alive, image, board);
}

Bishop.prototype = Object.create(Piece.prototype);


Bishop.prototype.getPossibleCells = function () {
    var positionX = this.positionX;
    var positionY = this.positionY;
    var possibleCells = [];

    this._checkDownPositiveDiagonal(positionX,positionY,possibleCells);
    this._checkUpPositiveDiagonal(positionX,positionY,possibleCells);
    this._checkUpNegativeDiagonal(positionX,positionY,possibleCells);
    this._checkDownNegativeDiagonal(positionX,positionY,possibleCells);

    return possibleCells;
}

Bishop.prototype._checkDownPositiveDiagonal = function(positionX,positionY,possibleCells) {
    var j = positionY;
    for (var i = positionX + 1; i < 9; i++) {
        j++;
        if (j < 9) {
            var cellToCheck = this.board[i][j];
            var possibleCell = [i,j];
            if (cellToCheck == null) {
                possibleCells.push(possibleCell);
            } else if (this.isOpponent(cellToCheck.color)) {
                possibleCells.push(possibleCell);
                break;
            } else {
                break;
            }
        } else {
            break;
        }
    }
}

Bishop.prototype._checkUpPositiveDiagonal = function(positionX,positionY,possibleCells) {
    var j = positionY;
    for (var i = positionX + 1; i < 9; i++) {
        j--;
        if (j > -1) {
            var cellToCheck = this.board[i][j];
            var possibleCell = [i,j];
            if (cellToCheck == null) {
                possibleCells.push(possibleCell);
            } else if (this.isOpponent(cellToCheck.color)) {
                possibleCells.push(possibleCell);
                break;
            } else {
                break;
            }
        } else {
            break;
        }
    }
}

Bishop.prototype._checkUpNegativeDiagonal = function(positionX,positionY,possibleCells) {
    var j = positionY;
    for (var i = positionX - 1; i >-1; i--) {
        j++;
        if (j < 9) {
            var cellToCheck = this.board[i][j];
            var possibleCell = [i,j];
            if (cellToCheck == null) {
                possibleCells.push(possibleCell);
            } else if (this.isOpponent(cellToCheck.color)) {
                possibleCells.push(possibleCell);
                break;
            } else {
                break;
            }
        } else {
            break;
        }
    }
}

Bishop.prototype._checkDownNegativeDiagonal = function(positionX,positionY,possibleCells) {
    var j = positionY;
    for (var i = positionX - 1; i >-1; i--) {
        j--;
        if (j > -1) {
            var cellToCheck = this.board[i][j];
            var possibleCell = [i,j];
            if (cellToCheck == null) {
                possibleCells.push(possibleCell);
            } else if (this.isOpponent(cellToCheck.color)) {
                possibleCells.push(possibleCell);
                break;
            } else {
                break;
            }
        } else {
            break;
        }
    }
}