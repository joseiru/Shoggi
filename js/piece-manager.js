function Piece (color, positionX, positionY, alive, image, board) {

    this.color = color;
    this.positionX = positionX;
    this.positionY = positionY;
    this.alive = alive;
    this.board = board
    this.selected = false;
    this.possible = false;

    if (this.color === "W") {
        this.image = "img/" + image + "-w.png";
    } else {
        this.image = "img/" + image + "-b.png";
    }
}

Piece.prototype.isInsideBoard = function (positionX, positionY) {
    if ((positionX >= 0) && (positionX < 9) && (positionY >= 0) && (positionY < 9)) {
        return true;
    } else {
        return false;
    }
}

Piece.prototype.isOpponent = function (color) {
    if (this.color !== color) {
        return true;
    } else {
        return false;
    }
}

Piece.prototype._getPossibleCellsWithDirections = function (child,directions) {
    var possibleCells = [];
    var that = child;

    directions.forEach(function(direction){
        var possiblePositionX = that.positionX + direction[0];
        var possiblePositionY = that.positionY + direction[1];
        var cellIsInsideBoard = that.isInsideBoard(possiblePositionX,possiblePositionY);
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
    return possibleCells;
}






