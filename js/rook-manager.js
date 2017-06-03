function Rook (color, positionX, positionY, alive, image, board) {
    Piece.call(this, color, positionX, positionY, alive, image, board);
}

Rook.prototype = Object.create(Piece.prototype);


Rook.prototype.getPossibleCells = function () {
    var positionX = this.positionX;
    var positionY = this.positionY;
    var possibleCells = [];
    //all possible moves in the up
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
    //all possible moves in the down
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
    //all possible moves to the right
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
    //all possible moves to the left
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

    return possibleCells;
}