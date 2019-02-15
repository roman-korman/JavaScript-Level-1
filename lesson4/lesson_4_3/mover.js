let mover = {
    getNextPoint(direction) {
        let nextPoint = {
            x: player.x,
            y: player.y
        };

        // 2, 6, 8, 4
        switch (direction) {
            case '2':
                nextPoint.y--;
                break;
            case '6':
                nextPoint.x++;
                break;
            case '8':
                nextPoint.y++;
                break;
            case '4':
                nextPoint.x--;
                break;
        }
        return nextPoint;
    }
};
