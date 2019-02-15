let game = {

  run() {
    while (true) {
      let direction = prompt('Введите направление (1- вниз, влево / 2 - вниз / 3 - вниз, вправо / 4 - влево / 6 -вправо / 7 - вверх, влево / 8 - вверх / 9 - вверх, вправо)');

      if (direction === null) {
        console.log('Игра окончена');
        return;
      } else if (direction != 1 && direction != 2 && direction != 3 && direction != 4 && direction != 6 && direction != 7 && direction != 8 && direction != 9) {
        alert('Пропуск хода')
      }
      let nextPoint = mover.getNextPoint(direction);
      if (nextPoint.x > 9 && nextPoint.y > 9) {
        nextPoint = mover.getBackPoint(direction);
        alert('Вы дошли до павого-нижнего угла этого мира')
      } else if (nextPoint.x < 0 && nextPoint.y > 9) {
        nextPoint = mover.getBackPoint(direction);
        alert('Вы дошли до левого-нижнего угла этого мира')
      } else if (nextPoint.x < 0 && nextPoint.y < 0) {
        nextPoint = mover.getBackPoint(direction);
        alert('Вы дошли до левого-верхнего угла этого мира')
      } else if (nextPoint.x > 9 && nextPoint.y < 0) {
        nextPoint = mover.getBackPoint(direction);
        alert('Вы дошли до правого-верхнего угла этого мира')
      } else if (nextPoint.x > 9) {
        nextPoint = mover.getBackPoint(direction);
        alert('Вы дошли до правой границы этого мира')
      } else if (nextPoint.x < 0) {
        nextPoint = mover.getBackPoint(direction);
        alert('Вы дошли до левой границы этого мира')
      } else if (nextPoint.y < 0) {
        nextPoint = mover.getBackPoint(direction);
        alert('Вы дошли до верхней границы этого мира')
      } else if (nextPoint.y > 9) {
        nextPoint = mover.getBackPoint(direction);
        alert('Вы дошли до нижней границы этого мира')
      } else {
        renderer.clear();
        player.move(nextPoint);
        renderer.render();
      }
    }
  },

  init() {
    console.log('Для начала игры введите команду game.run()');
    renderer.render();
  },

};




game.init();
