function Piece (color, positionX, positionY, alive, image, board) {

    this.color = color;
    this.positionX = positionX;
    this.positionY = positionY;
    this.alive = alive;
    this.board = board
    this.selected = false;
    this.possible = false;

    if (this.color === "W") {
        //to do dar valor a la imagen
        this.image = "img/" + image + "-w.png";
    } else {
        //to do dar valor a la imagen
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



