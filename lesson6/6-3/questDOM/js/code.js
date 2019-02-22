renderer.render();
window.addEventListener('keyup', function (event) {
    mover.makeStep(event);
    console.log('keyup');
});

window.addEventListener('keydown', function (event) {
    console.log('keydown');
});
