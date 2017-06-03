function Lance (color, positionX, positionY, alive, image, board) {
    Piece.call(this, color, positionX, positionY, alive, image, board);
}

Lance.prototype = Object.create(Piece.prototype);


Lance.prototype.getPossibleCells = function () {
    var positionX = this.positionX;
    var positionY = this.positionY;
    var possibleCells = [];

    if (this.color === "W") {
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
    } else if (this.color === "B") {
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
    
    return possibleCells;  
}