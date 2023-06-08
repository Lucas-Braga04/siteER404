let ul = document.querySelector('nav ul');
let menuButton = document.querySelector('btn-mobile');

function mostrarMenu() {
    if (ul.classList.contains('open')) {
        ul.classList.remove('open')
    } else {
        ul.classList.add('open')
    }
}