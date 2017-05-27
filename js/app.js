var shogi;

window.onload = function () {
  shogi = new Shogi();
  renderPieces();
};

function renderPieces () {
  shogi.board.forEach(function(row, rowIndex){
    row.forEach(function (cell, cellIndex) {
      var pieceContainer = document.getElementById("piece-container");
      var newPiece = document.createElement("div");

      newPiece.classList = "piece piece-position-" + rowIndex + "-" + cellIndex;
      if (cell) {
        var imgPiece = document.createElement("img");
        imgPiece.setAttribute("src", cell.image);
        imgPiece.setAttribute("height", "70");
        imgPiece.setAttribute("width", "70");
        imgPiece.setAttribute("alt", rowIndex + "-" + cellIndex);
        imgPiece.addEventListener("click", selectPieceToMove, false);
        newPiece.appendChild(imgPiece);
      }
      pieceContainer.appendChild(newPiece);
    });
  });
}

function selectPieceToMove (event) {
  var pieceDiv = event.srcElement.parentNode; 
  pieceDiv.classList.add("red-border");
  var positionX = event.srcElement.alt.substring(0,1);
  var positionY = event.srcElement.alt.substring(2,3);
  var piece = shogi.board[positionX][positionY];
  var possibleCells = piece.getPossibleCells();
  selectPossibleCells(possibleCells);
}

function selectPossibleCells(possibleCells) {
  for (var i=0; i<possibleCells.length; i++) {
    var possibleCell = possibleCells[i];
    console.log(possibleCell);
    var cell = document.getElementsByClassName("piece-position-" + possibleCell[0] + "-" + possibleCell[1]);
    console.log(cell);
    cell[0].classList.add("blue-border");
  }
}




