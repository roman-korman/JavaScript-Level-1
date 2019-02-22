"use strict";

let ticTakToe = {
    mapValues: [
        ['','',''],
        ['','',''],
        ['','','']
    ],
    config: {rows: 3, cols: 3},
    status: 'playing',
    gameElement: document.getElementById('game'),
    phase: 'X',

    init() {
        this.renderMap();

        this.initEventHandlers();
    },

    initEventHandlers() {
        this.gameElement.addEventListener('click', event => this.cellClickHandler(event))
    },

    cellClickHandler(event) {
        // Если клик не нужно обрабатывать, уходим из функции.
        if (!this.isCorrectClick(event)) {
            return;
        }

        // Заполняем ячейку.
        this.fillCell(event);

        // Если кто-то выиграл, заходим в if.
        if (this.hasWon()) {
            // Ставим статус в "остановлено".
            this.setStatusStopped();
            // Сообщаем о победе пользователя.
            this.sayWonPhrase();
        }

        // Меняем фигуру (крестик или нолик).
        this.togglePhase();
    },

    togglePhase() {
        this.phase = this.phase === 'X' ? '0' : 'X';
    },

    sayWonPhrase() {
        let figure = this.phase === 'X' ? 'Крестики' : 'Нолики';
        alert(`${figure} выиграли!`);
    },

    setStatusStopped() {
        this.status = 'stopped';
    },

    hasWon() {
        return this.isLineWon({x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}) ||
            this.isLineWon({x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}) ||
            this.isLineWon({x: 0, y: 2}, {x: 1, y: 2}, {x: 2, y: 2}) ||

            this.isLineWon({x: 0, y: 0}, {x: 0, y: 1}, {x: 0, y: 2}) ||
            this.isLineWon({x: 1, y: 0}, {x: 1, y: 1}, {x: 1, y: 2}) ||
            this.isLineWon({x: 2, y: 0}, {x: 2, y: 1}, {x: 2, y: 2}) ||

            this.isLineWon({x: 0, y: 0}, {x: 1, y: 1}, {x: 2, y: 2}) ||
            this.isLineWon({x: 0, y: 2}, {x: 1, y: 1}, {x: 2, y: 0});
    },

    isLineWon(a, b, c) {
        let value = this.mapValues[a.y][a.x] + this.mapValues[b.y][b.x] + this.mapValues[c.y][c.x];
        return value === 'XXX' || value === '000';
    },

    fillCell(event) {
        let row = +event.target.dataset.row;
        let col = +event.target.dataset.col;

        this.mapValues[row][col] = this.phase;
        event.target.textContent = this.phase;
    },

    isCorrectClick(event) {
        return this.isStatusPlaying() && this.isClickByCell(event) && this.isCellEmpty(event);
    },

    isStatusPlaying() {
        return this.status === 'playing';
    },

    isClickByCell(event) {
        return event.target.tagName === 'TD';
    },

    isCellEmpty(event) {
        let row = +event.target.dataset.row;
        let col = +event.target.dataset.col;

        return this.mapValues[row][col] === '';
    },

    renderMap() {
        // Пробегаемся по всем линиям.
        for (let row = 0; row < this.config.rows; row++) {
            // Создаем линию.
            const tr = document.createElement('tr');
            // Добавляем линию в таблицу.
            this.gameElement.appendChild(tr);
            // Пробегаемся по всем колонкам.
            for (let col = 0; col < this.config.cols; col++) {
                // Создаем колонку.
                let td = document.createElement('td');
                // Добавляем в data-аттрибуты данные с номерами этой ячейки.
                td.dataset.row = row.toString();
                td.dataset.col = col.toString();
                // Добавляем колонку в линию.
                tr.appendChild(td);
            }
        }
    }
};

window.addEventListener('load', ticTakToe.init());
