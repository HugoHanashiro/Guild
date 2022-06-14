function limparSessao() {
    sessionStorage.clear();
    window.location = "../sign-in.html";
}

function checkLogin() {
    let idUsuario = sessionStorage.getItem('idUsuario');

    if (idUsuario == null) {
        console.log(`usuário não está logado, voltando à pagina de login`);
        window.location = "./sign-in.html";
    }
}

function translateStatusList(statusList) {
    let statusListTranslated = [];
    for (let i = 0; i < statusList.length; i++) {
        if (statusList[i] == 'wish') {
            statusListTranslated.push('Desejo');
        } else if (statusList[i] == 'beaten') {
            statusListTranslated.push('Terminado');
        } else if (statusList[i] == 'always') {
            statusListTranslated.push('Recorrente');
        } else if (statusList[i] == 'playing') {
            statusListTranslated.push('Jogando');
        } else if (statusList[i] == 'played') {
            statusListTranslated.push('Jogado');
        }
    }
    return statusListTranslated;
}

function translateStatus(status) {
    if (status == 'wish') {
        return 'Desejo';
    } else if (status == 'beaten') {
        return 'Terminado';
    } else if (status == 'always') {
        return 'Recorrente';
    } else if (status == 'playing') {
        return 'Jogando';
    } else if (status == 'played') {
        return 'Jogado';
    }
}