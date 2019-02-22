let renderer = {
      render() {
          let table = this.generateTable();
          document.body.insertAdjacentHTML('afterbegin', table);
          this.generateWall();
          this.renderUserPosition(player);
      },

    generateTable() {
          let board = '';
          for(let y = 0; y < config.rowsCount; y++) {
              board += '<tr>';
              for(let x = 0; x < config.colsCount; x++) {
                  board += '<td data-x="' + x + '" data-y="' + y + '"> </td>';
              }
              board += '</tr>';
          }
          return '<table><tbody>'+ board +' </tbody></table>';
    },

    generateWall() {
          for(let value of wall.wallList) {
              let wallElement = this.getSquare(value);
              wallElement.setAttribute('data-x', '');
              wallElement.setAttribute('data-y', '');
              wallElement.classList.add('wall');
          }
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
