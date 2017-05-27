window.onload = function () {
  shogi = new Shogi();
  renderPieces();
};

function renderPieces () {
  shogi.board.forEach(function(row, rowIndex){
    row.forEach(function (cell, cellIndex) {
      if (cell) {
        var pieceContainer = document.getElementById("piece-container");
        var newPiece = document.createElement("div");

        newPiece.classList = "piece piece-position-" + rowIndex + "-" + cellIndex;
    
        var imgPiece = document.createElement("img");
        imgPiece.setAttribute("src", cell.image);
        imgPiece.setAttribute("height", "70");
        imgPiece.setAttribute("width", "70");
        imgPiece.setAttribute("alt", cell.image);

        newPiece.appendChild(imgPiece);
        pieceContainer.appendChild(newPiece);
      }
    });
  });
}
