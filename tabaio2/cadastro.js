const formLogin=document.getElementById('formLogin')
const formscadastro=document.getElementById('formscadastro')
let contador = 0

function cadastrar() {
    console.log('ola')
    const objeto = {

        
    nome : formscadastro.nome.value,
    email : formscadastro.email.value,
    senha : formscadastro.senha.value,
    telefone : formscadastro.telefone.value,
    cidade : formscadastro.cidade.value,
    estado : formscadastro.estado.value,

       

    }
    console.log(objeto)
   
    const objetoJson = JSON.stringify(objeto)
    contador++
    localStorage.setItem('pessoa' + contador, objetoJson)
}

function pegarDados() {
   
    const email = formLogin.loginNome.value;
    const password=formLogin.loginSenha.value;
    const key = 'pessoa1'; 
    const pessoaJson = localStorage.getItem(key);

    if (pessoaJson) {
        const pessoa = JSON.parse(pessoaJson);

        if (email === pessoa.email && pessoa.password===password) {
            console.log(pessoa);
            window.location.href='http://127.0.0.1:5500/index.html'
        } else {
            console.log("Errou");
        }
    } else {
        console.log("Nenhuma pessoa encontrada com a chave: " + key);
    }
}