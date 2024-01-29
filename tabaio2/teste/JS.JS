// Função para obter dados do LocalStorage ou retornar um array vazio se não houver dados
function getUsuarios() {
    const usuariosJSON = localStorage.getItem('usuarios');
    return usuariosJSON ? JSON.parse(usuariosJSON) : [];
}

// Array para armazenar os dados dos usuários
let usuarios = getUsuarios();

function cadastrar() {
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    // Verifica se o email já está cadastrado
    if (usuarios.some(u => u.email === email)) {
        exibirMensagem("E-mail já cadastrado.");
        return;
    }

    // Adiciona o novo usuário ao array
    usuarios.push({ nome, email, senha });

    // Armazena o array atualizado no LocalStorage
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    exibirMensagem("Cadastro realizado com sucesso.");
}

function login() {
    let email = document.getElementById("loginEmail").value;
    let senha = document.getElementById("loginSenha").value;

    // Verifica se as credenciais correspondem a algum usuário
    let usuario = usuarios.find(u => u.email === email && u.senha === senha);

    if (usuario) {
        exibirMensagem("Login bem-sucedido. Bem-vindo, " + usuario.nome + "!");
    } else {
        exibirMensagem("Conta inexistente ou credenciais incorretas.");
    }
}

function exibirMensagem(mensagem) {
    document.getElementById("mensagem").innerHTML = mensagem;
}