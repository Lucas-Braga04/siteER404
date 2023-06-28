window.addEventListener('resize', resizeIframe);

function resizeIframe() {
    var iframe = document.getElementById('pitchVideo');
    var windowWidth = window.innerWidth;

    // Defina a altura do iframe com base no tamanho da janela
    if (windowWidth < 800) {
        iframe.style.height = '300px'; // Altura menor para telas menores que 800px
    } else {
        iframe.style.height = '500px'; // Altura padrão para telas maiores que 800px
    }
}

resizeIframe();