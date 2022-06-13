function limparSessao() {
    sessionStorage.clear();
    window.location = "../sign-in.html";
}

function checkLogin() {
    let idUsuario = sessionStorage.getItem('idUsuario');

    if (idUsuario == null) {
        console.log(`usuário não está logado, voltando à pagina de login`);
        window.location = "./sing-in.html";
    }
}