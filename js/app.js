var shogi;

window.onload = function () {
  shogi = new Shogi();
  renderPieces();
  renderTurn();
};

function renderPieces () {
  for (var rowIndex=0; rowIndex<shogi.board.length; rowIndex++) {
    for (var cellIndex=0; cellIndex<shogi.board[rowIndex].length; cellIndex++) {
      var cell = shogi.board[rowIndex][cellIndex];
      var pieceContainer = document.getElementById("piece-container");
      var newPiece = document.createElement("div");
      newPiece.classList = "piece position-" + rowIndex + "-" + cellIndex;
      newPiece.addEventListener("click", selectPieveToMoveAndMovement, false);
      if (cell != null) {
        var imgPiece = document.createElement("img");
        imgPiece.setAttribute("src", cell.image);
        imgPiece.setAttribute("height", "70");
        imgPiece.setAttribute("width", "70");
        imgPiece.setAttribute("alt", rowIndex + "-" + cellIndex);
        newPiece.appendChild(imgPiece);
      }
      pieceContainer.appendChild(newPiece);
    }
  }
}

function renderCapturedPieces() {
   var capturedBlackContainer = document.getElementById("captured-black-pieces");
   for (var i=0; i<shogi.capturedBlack.length; i++) {
      var piece = shogi.capturedBlack[i];
      var imgPiece = document.createElement("img");
      imgPiece.setAttribute("src", piece.image);
      imgPiece.setAttribute("height", "70");
      imgPiece.setAttribute("width", "70");
      capturedBlackContainer.appendChild(imgPiece);
   }
   var capturedWhiteContainer = document.getElementById("captured-white-pieces");
   for (var i=0; i<shogi.capturedWhite.length; i++) {
      var piece = shogi.capturedWhite[i];
      var imgPiece = document.createElement("img");
      imgPiece.setAttribute("src", piece.image);
      imgPiece.setAttribute("height", "70");
      imgPiece.setAttribute("width", "70");
      capturedWhiteContainer.appendChild(imgPiece);
   }
}


function resetPieces () {
  var pieceContainer = document.getElementById("piece-container");
  var pieces = pieceContainer.getElementsByClassName("piece");

  Array.prototype.slice.call(pieces).forEach(function (piece) {
    pieceContainer.removeChild(piece);
  });
}

function resetCapturedPieces () {
  $("#captured-black-pieces").empty();
  $("#captured-white-pieces").empty();
}

function selectPieveToMoveAndMovement (event) {
  var pieceDiv = event.srcElement.parentNode;

  // select piece to move
  if ((event.target.nodeName === "IMG") && (shogi.pieceSelected == false)) {
    shogi.selectedPositionX = event.srcElement.alt.substring(0,1);
    shogi.selectedPositionY = event.srcElement.alt.substring(2,3);
    shogi.selectedPiece = shogi.board[shogi.selectedPositionX][shogi.selectedPositionY];
    if (shogi.selectedPiece.color === shogi.getTurn()) {
      pieceDiv.classList.add("red-border");
      shogi.possibleCells = shogi.selectedPiece.getPossibleCells();
      selectPossibleCells(shogi.possibleCells);
      shogi.pieceSelected = true;
    }
  // unselect piece to move
  } else if ((event.target.nodeName === "IMG") && (shogi.pieceSelected == true) && ($(event.target).parent().hasClass("red-border"))) {
    shogi.pieceSelected = false;
    rePaintBoard();
  // move piece to empty tile
  } else if ((shogi.pieceSelected == true) && ($(event.target).hasClass("blue-border"))) {
    moveToEmptyTile();
  // move piece to capture opponent piece
  } else if ((shogi.pieceSelected == true) && ($(event.target).parent().hasClass("blue-border"))) {
    moveToCaptureOponent();
  }
}

function selectPossibleCells (possibleCells) {
  for (var i=0; i<possibleCells.length; i++) {
    var possibleCell = possibleCells[i];
    var cell = document.getElementsByClassName("position-" + possibleCell[0] + "-" + possibleCell[1]);
    cell[0].classList.add("blue-border");
  }
}

function renderTurn () {
  if (shogi.isGameOver(shogi.getTurn())) {
    showWinnerMessage();
  } else if (shogi.getTurn() === "B") {
    $("#game-board").removeClass("white-turn"); 
    $("#game-board").addClass("black-turn");
  } else {
    $("#game-board").removeClass("black-turn"); 
    $("#game-board").addClass("white-turn");
  }
}

function rePaintBoard() {
  resetPieces();
  renderPieces();
  resetCapturedPieces();
  renderCapturedPieces();
  renderTurn(); 
}

function moveToEmptyTile() {
  var newPositionClass = $(event.target).attr('class');
  shogi.newPositionX = parseInt(newPositionClass.charAt(15));
  shogi.newPositionY = parseInt(newPositionClass.charAt(17));
  shogi.selectedPiece.positionX = shogi.newPositionX;
  shogi.selectedPiece.positionY = shogi.newPositionY;
  shogi.board[shogi.newPositionX][shogi.newPositionY] = shogi.selectedPiece;
  shogi.board[shogi.selectedPositionX][shogi.selectedPositionY] = null;
  shogi.pieceSelected = false;
  shogi.switchTurn();
  rePaintBoard(); 
}

function moveToCaptureOponent() {
  var newPositionClass = $(event.target).parent().attr('class');
  shogi.newPositionX = parseInt(newPositionClass.charAt(15));
  shogi.newPositionY = parseInt(newPositionClass.charAt(17));
  shogi.selectedPiece.positionX = shogi.newPositionX;
  shogi.selectedPiece.positionY = shogi.newPositionY;
  if (shogi.getTurn() === "B") {
    shogi.capturedWhite.push(shogi.board[shogi.newPositionX][shogi.newPositionY]);
  } else {
    shogi.capturedBlack.push(shogi.board[shogi.newPositionX][shogi.newPositionY]);
  }
  shogi.board[shogi.newPositionX][shogi.newPositionY] = shogi.selectedPiece;
  shogi.board[shogi.selectedPositionX][shogi.selectedPositionY] = null;
  shogi.pieceSelected = false;
  shogi.switchTurn();
  rePaintBoard(); 
}

function showWinnerMessage() {
  var loserLongName = "";
  if (shogi.getTurn() === "B") {
    loserLongName = "BLUE";
  } else {
    loserLongName = "RED";
  }
  if (confirm(loserLongName + " WINS" + ". Play Again?")) {
    shogi = new Shogi();
    rePaintBoard(); 
  }
}







