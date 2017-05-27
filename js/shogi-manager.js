function Shogi () {

    this.board = new Array(9);
    for (var i = 0; i < 9; i++){ 
        this.board[i] = new Array(9); 
    } 

    this.playerWhite = new Player("W");
    this.playerBlack = new Player("B");

    this.playerTurn = "W";

    this.board[0][4] = new King("W",0,4,true,"king");
    this.board[8][4] = new King("B",8,4,true,"king");
    this.board[0][3] = new GoldGeneral("W",0,3,true,"goldgeneral");
    this.board[0][5] = new GoldGeneral("W",0,5,true,"goldgeneral");
    this.board[8][3] = new GoldGeneral("B",8,3,true,"goldgeneral");
    this.board[8][5] = new GoldGeneral("B",8,5,true,"goldgeneral");
    this.board[0][2] = new SilverGeneral("W",0,2,true,"silvergeneral");
    this.board[0][6] = new SilverGeneral("W",0,6,true,"silvergeneral");
    this.board[8][2] = new SilverGeneral("B",8,2,true,"silvergeneral");
    this.board[8][6] = new SilverGeneral("B",8,6,true,"silvergeneral");
    this.board[0][1] = new Knight("W",0,1,true,"knight");
    this.board[0][7] = new Knight("W",0,7,true,"knight");
    this.board[8][1] = new Knight("B",8,1,true,"knight");
    this.board[8][7] = new Knight("B",8,7,true,"knight");
    this.board[0][0] = new Lance("W",0,0,true,"lance");
    this.board[0][8] = new Lance("W",0,8,true,"lance");
    this.board[8][0] = new Lance("B",8,0,true,"lance");
    this.board[8][8] = new Lance("B",8,8,true,"lance");
    this.board[7][1] = new Bishop("B",7,1,true,"bishop");
    this.board[1][7] = new Bishop("W",1,7,true,"bishop");
    this.board[7][7] = new Rook("B",7,7,true,"rook");
    this.board[1][1] = new Rook("W",1,1,true,"rook");
    for (var i = 0; i < 9; i++) {
        this.board[2][i] = new Pawn("W",2,i,true,"pawn");
        this.board[6][i] = new Pawn("B",6,i,true,"pawn");
    }
}