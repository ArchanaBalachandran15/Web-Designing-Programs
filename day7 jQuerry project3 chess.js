$(document).ready(function () {
  const board = $('#chessboard');
  const pieces = {
    'R': '♖', 'N': '♘', 'B': '♗', 'Q': '♕', 'K': '♔', 'P': '♙',
    'r': '♜', 'n': '♞', 'b': '♝', 'q': '♛', 'k': '♚', 'p': '♟'
  };

  const initialBoard = [
    'r','n','b','q','k','b','n','r',
    'p','p','p','p','p','p','p','p',
    '','','','','','','','',
    '','','','','','','','',
    '','','','','','','','',
    '','','','','','','','',
    'P','P','P','P','P','P','P','P',
    'R','N','B','Q','K','B','N','R'
  ];

  // Draw the board
  for (let i = 0; i < 64; i++) {
    const cell = $('<div class="cell"></div>');
    const row = Math.floor(i / 8);
    const col = i % 8;
    cell.addClass((row + col) % 2 === 0 ? 'white' : 'black');
    cell.attr('data-index', i);
    cell.text(pieces[initialBoard[i]] || '');
    board.append(cell);
  }

  let selectedCell = null;

  $('.cell').click(function () {
    if (!selectedCell) {
      if ($(this).text() !== '') {
        selectedCell = $(this);
        selectedCell.addClass('selected');
      }
    } else {
      if (selectedCell[0] !== this) {
        $(this).text(selectedCell.text());
        selectedCell.text('');
      }
      selectedCell.removeClass('selected');
      selectedCell = null;
    }
  });
});
