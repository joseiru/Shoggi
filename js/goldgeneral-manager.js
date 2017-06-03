function GoldGeneral (color, positionX, positionY, alive, image, board) {
    Piece.call(this, color, positionX, positionY, alive, image, board);
}

GoldGeneral.prototype = Object.create(Piece.prototype);


GoldGeneral.prototype.getPossibleCells = function () {
    var directionsWhite = [[-1,0],[0,1],[1,1],[1,0],[1,-1],[0,-1]];
    var directionsBlack = [[-1,-1],[-1,0],[-1,1],[0,1],[1,0],[0,-1]];
    var possibleCells = [];
    var that = this;

    if (this.color === "W") {
        directionsWhite.forEach(function(direction){
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
    } else {
        directionsBlack.forEach(function(direction){
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
  
    return possibleCells;
}