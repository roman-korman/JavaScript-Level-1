let renderer = {
  render() {
    let table = this.generateTable();
    document.body.insertAdjacentHTML('afterbegin', table);
    this.renderUserPosition(player);
  },

  generateTable() {
    let board = '';
    for (let y = 0, i = 0; y < config.rowsCount; y++) {
      board += '<tr>';
      if (y % 2 == 1) { //отделяю чётные строчки, в которых будуду строить препядствия
        i++;
        if (i % 2 == 0) { //определяю строчки в которых нужно поставить открытое поле в коце
          board += '<td data-x="' + 0 + '" data-y="' + y + '"> </td>';
          for (let x = 0; x < config.colsCount - 1; x++) {
            board += '<td class="block"> </td>';
          }
        } else { //определяю строчки в которых нужно поставить открытое поле в начале
          for (let x = 0; x < config.colsCount - 1; x++) {
            board += '<td class="block"> </td>';
          }
          board += '<td data-x="' + (config.colsCount - 1) + '" data-y="' + y + '"> </td>';
        }
      } else { // строка по которой можно свободно перемещаться
        for (let x = 0; x < config.colsCount; x++) {
          board += '<td data-x="' + x + '" data-y="' + y + '"> </td>';
        }
      }
      board += '</tr>';
    }
    return '<table><tbody>' + board + ' </tbody></table>';
  },

  renderUserPosition(player) {
    let square = this.getSquare(player);
    square.classList.add('user');
  },

  getSquare(player) {
    return document.querySelector(`[data-x="${player.x}"][data-y="${player.y}"]`);
  },

  clearUserPosition() {
    document.querySelector('.user').classList.remove('user');
  }

};
