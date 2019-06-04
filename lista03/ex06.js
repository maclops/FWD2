function limpar() {
    document.querySelector('#login').value = '';
    limparSenhas();
}

function limparSenhas() {
    document.querySelector('#senha').value = '';
    document.querySelector('#confirmaSenha').value = '';
}

function enviar() {
    var login = document.querySelector('#login');
    var pass = document.querySelector('#senha');
    var cPass = document.querySelector('#confirmaSenha');

    if (login.value == '')
        alert("Campo Login está vazio, favor preencher");
    else
        if (pass.value !== cPass.value) {
            alert('Senha e confirmação de senha são diferentes');
            limparSenhas();
        } else if (pass.value.length > 8 && cPass.value.length > 8) {
            alert("Senha não pode ter maior que 8 caracteres");
            limparSenhas();
        } else
            alert("Todos campos foram digitados corretamente");
}