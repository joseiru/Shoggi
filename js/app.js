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

function resetPieces () {
  var pieceContainer = document.getElementById("piece-container");
  var pieces = pieceContainer.getElementsByClassName("piece");

  Array.prototype.slice.call(pieces).forEach(function (piece) {
    pieceContainer.removeChild(piece);
  });
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
    //pieceDiv.classList.remove("red-border");
    shogi.pieceSelected = false;
    resetPieces();
    renderPieces();
    renderTurn();
  // move piece to empty tile
  } else if ((shogi.pieceSelected == true) && ($(event.target).hasClass("blue-border"))) {
    var newPositionClass = $(event.target).attr('class');
    shogi.newPositionX = parseInt(newPositionClass.charAt(15));
    shogi.newPositionY = parseInt(newPositionClass.charAt(17));
    shogi.selectedPiece.positionX = shogi.newPositionX;
    shogi.selectedPiece.positionY = shogi.newPositionY;
    shogi.board[shogi.newPositionX][shogi.newPositionY] = shogi.selectedPiece;
    shogi.board[shogi.selectedPositionX][shogi.selectedPositionY] = null;
    shogi.pieceSelected = false;
    resetPieces();
    renderPieces();
    shogi.switchTurn();
    renderTurn();
  // move piece to eat opponent piece
  } else if ((shogi.pieceSelected == true) && ($(event.target).parent().hasClass("blue-border"))) {
    var newPositionClass = $(event.target).parent().attr('class');
    shogi.newPositionX = parseInt(newPositionClass.charAt(15));
    shogi.newPositionY = parseInt(newPositionClass.charAt(17));
    shogi.selectedPiece.positionX = shogi.newPositionX;
    shogi.selectedPiece.positionY = shogi.newPositionY;
    shogi.board[shogi.newPositionX][shogi.newPositionY] = shogi.selectedPiece;
    shogi.board[shogi.selectedPositionX][shogi.selectedPositionY] = null;
    shogi.pieceSelected = false;
    resetPieces();
    renderPieces();
    shogi.switchTurn();
    renderTurn();
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
    var loserLongName = "";
    if (shogi.getTurn() === "B") {
      loserLongName = "BLUE";
    } else {
      loserLongName = "RED";
    }
    if (confirm(loserLongName + " WINS" + ". Play Again?")) {
      shogi = new Shogi();
      resetPieces();
      renderPieces();
      renderTurn();  
    }
  } else if (shogi.getTurn() === "B") {
    $("#game-board").removeClass("white-turn"); 
    $("#game-board").addClass("black-turn");
  } else {
    $("#game-board").removeClass("black-turn"); 
    $("#game-board").addClass("white-turn");
  }
}






