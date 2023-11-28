function coletarDados() {
    var nome = document.getElementById('nome').value;
    var id = document.getElementById('id').value;
    var data = document.getElementById('data').value;
    var email = document.getElementById('email').value;
    document.getElementById('nome').value = '';
    document.getElementById('id').value = '';
    document.getElementById('data').value = '';
    document.getElementById('email').value = '';
}

function limparDados() {
    var nome = document.getElementById('nome');
    var id = document.getElementById('id');
    var data = document.getElementById('data');
    var email = document.getElementById('email');
    nome.value = '';
    id.value = '';
    data.value = '';
    email.value = '';
}
