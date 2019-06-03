function limpar() {
    document.querySelector('#login').value = '';
    document.querySelector('#senha').value = '';
    document.querySelector('#confirmaSenha').value = '';
}

function enviar() {
    var login = document.querySelector('#login');
    var pass = document.querySelector('#senha');
    var cPass = document.querySelector('#confirmaSenha');

    if(login.value == '') 
        alert("Campo Login está vazio, favor preencher")
    else 
        if (pass.value !== cPass.value) {
            alert('Senha e confirmação de senha são diferentes')
            document.querySelector('#senha').value = '';
            document.querySelector('#confirmaSenha').value = '';
        }
        else
            alert('Todos campos foram digitados corretamente')
}