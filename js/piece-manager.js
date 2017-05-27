function Piece (color, positionX, positionY, alive, image) {

    this.color = color;
    this.positionX = positionX;
    this.positionY = positionY;
    this.alive = alive;
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
    if ((x > 0) && (x < 9) && (y > 0) && (y < 9)) {
        return true;
    } else {
        return false;
    }
}

Piece.prototype.selectPieceToMove = function () {
    
}