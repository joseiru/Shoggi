function Bishop (color, positionX, positionY, alive, image, board) {
    Piece.call(this, color, positionX, positionY, alive, image, board);
}

Bishop.prototype = Object.create(Piece.prototype);


Bishop.prototype.getPossibleCells = function () {
    var positionX = this.positionX;
    var positionY = this.positionY;
    var possibleCells = [];
    //all possible moves in the down positive diagonal
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
    //all possible moves in the up positive diagonal
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
    //all possible moves in the up negative diagonal
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
    //all possible moves in the down negative diagonal
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
    console.log(possibleCells);
    return possibleCells;
}