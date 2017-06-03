function Pawn (color, positionX, positionY, alive, image, board) {
    Piece.call(this, color, positionX, positionY, alive, image, board);
}

Pawn.prototype = Object.create(Piece.prototype);

Pawn.prototype.getPossibleCells = function () {
    var possibleCells = [];
    var possiblePositionX;
    var possiblePositionY;
    if (this.color === "B") {
        possiblePositionX = this.positionX - 1;
        possiblePositionY = this.positionY;
    } else if (this.color === "W"){
        possiblePositionX = this.positionX + 1;
        possiblePositionY = this.positionY;
    }
    var cellIsInsideBoard = Piece.prototype.isInsideBoard(possiblePositionX,possiblePositionY);
    if (cellIsInsideBoard) {
        var cellToCheck = this.board[possiblePositionX][possiblePositionY];
        var cellIsOponent = false;

        if ((cellToCheck !== null) && (cellToCheck !== undefined)) {
            cellIsOponent = this.isOpponent(cellToCheck.color);
        }
        if ((cellToCheck === null) || (cellToCheck === undefined) || (cellIsOponent === true)) {
            var possibleCell = [];
            possibleCell.push(possiblePositionX);
            possibleCell.push(possiblePositionY);
            possibleCells.push(possibleCell);
        }
    } 
    return possibleCells;
}