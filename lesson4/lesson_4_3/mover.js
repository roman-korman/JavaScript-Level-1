let mover = {
  getNextPoint(direction) {
    let nextPoint = {
      x: player.x,
      y: player.y
    };
    /**
     * Описание механики дижения объекта
     * 1- вниз, влево / 2 - вниз / 3 - вниз, вправо / 4 - влево / 6 -вправо / 7 - вверх, влево / 8 - вверх / 9 - вверх, вправо
     */
    switch (direction) {
      case '1':
        nextPoint.y++;
        nextPoint.x--;
        break;
      case '2':
        nextPoint.y++;
        break;
      case '3':
        nextPoint.y++;
        nextPoint.x++;
        break;
      case '4':
        nextPoint.x--;
        break;
      case '6':
        nextPoint.x++;
        break;
      case '7':
        nextPoint.y--;
        nextPoint.x--;
        break;
      case '8':
        nextPoint.y--;
        break;
      case '9':
        nextPoint.y--;
        nextPoint.x++;
        break;

    }
    return nextPoint;

  },
  getBackPoint(direction) {
    let nextPoint = {
      x: player.x,
      y: player.y
    };
    switch (direction) {
      case '1':
        nextPoint.y--;
        nextPoint.x++;
        break;
      case '2':
        nextPoint.y--;
        break;
      case '3':
        nextPoint.y--;
        nextPoint.x--;
        break;
      case '4':
        nextPoint.x++;
        break;
      case '6':
        nextPoint.x--;
        break;
      case '7':
        nextPoint.y++;
        nextPoint.x++;
        break;
      case '8':
        nextPoint.y++;
        break;
      case '9':
        nextPoint.y++;
        nextPoint.x--;
        break;

    }
    return nextPoint;
  }
};
