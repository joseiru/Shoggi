function Shogi () {

    this.board = new Array(9);
    for (var i = 0; i < 9; i++){ 
        this.board[i] = new Array(9); 
    } 

    this.playerWhite = new Player("W");
    this.playerBlack = new Player("B");

    this.playerTurn = "B";

    this.selectedPositionX = 0;
    this.selectedPositionY = 0;
    this.selectedPiece = null;
    this.newPositionX = 0;
    this.newPositionY = 0;
    this.pieceSelected = false;
    this.possibleCells = [];

    this.board.forEach(function(row, rowIndex){
        row.forEach(function (cell, cellIndex) {
            this.board[rowIndex][cellIndex] = null;
        });
    });
    this.board[0][4] = new King("W",0,4,true,"king",this.board);
    this.board[8][4] = new King("B",8,4,true,"king",this.board);
    this.board[0][3] = new GoldGeneral("W",0,3,true,"goldgeneral",this.board);
    this.board[0][5] = new GoldGeneral("W",0,5,true,"goldgeneral",this.board);
    this.board[8][3] = new GoldGeneral("B",8,3,true,"goldgeneral",this.board);
    this.board[8][5] = new GoldGeneral("B",8,5,true,"goldgeneral",this.board);
    this.board[0][2] = new SilverGeneral("W",0,2,true,"silvergeneral",this.board);
    this.board[0][6] = new SilverGeneral("W",0,6,true,"silvergeneral",this.board);
    this.board[8][2] = new SilverGeneral("B",8,2,true,"silvergeneral",this.board);
    this.board[8][6] = new SilverGeneral("B",8,6,true,"silvergeneral",this.board);
    this.board[0][1] = new Knight("W",0,1,true,"knight",this.board);
    this.board[0][7] = new Knight("W",0,7,true,"knight",this.board);
    this.board[8][1] = new Knight("B",8,1,true,"knight",this.board);
    this.board[8][7] = new Knight("B",8,7,true,"knight",this.board);
    this.board[0][0] = new Lance("W",0,0,true,"lance",this.board);
    this.board[0][8] = new Lance("W",0,8,true,"lance",this.board);
    this.board[8][0] = new Lance("B",8,0,true,"lance",this.board);
    this.board[8][8] = new Lance("B",8,8,true,"lance",this.board);
    this.board[7][1] = new Bishop("B",7,1,true,"bishop",this.board);
    this.board[1][7] = new Bishop("W",1,7,true,"bishop",this.board);
    this.board[7][7] = new Rook("B",7,7,true,"rook",this.board);
    this.board[1][1] = new Rook("W",1,1,true,"rook",this.board);
    for (var i = 0; i < 9; i++) {
        this.board[2][i] = new Pawn("W",2,i,true,"pawn",this.board);
        this.board[6][i] = new Pawn("B",6,i,true,"pawn",this.board);
    }
}

Shogi.prototype.switchTurn = function () {
    if (this.playerTurn === "W") {
        this.playerTurn = "B";
    } else if (this.playerTurn === "B"){
        this.playerTurn = "W";
    }
}

Shogi.prototype.getTurn = function () {
    return this.playerTurn;
}
