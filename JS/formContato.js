function formularioContato() {
    const campos = document.querySelectorAll('input[type="text"], textarea, input[type="email"], input[type="tel"]');

    // Verificar se todos os campos foram preenchidos
    const todosPreenchidos = Array.from(campos).every((campo) => campo.value.trim() !== '');

    if (todosPreenchidos) {
        // Exibir a mensagem
        alert('Envio bem sucedido, entraremos em contato, fique de olho em seu email.');
    }
}