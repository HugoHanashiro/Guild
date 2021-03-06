CREATE DATABASE GuildDB;
USE GuildDB;

CREATE TABLE Usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nomeUsuario VARCHAR(20) NOT NULL UNIQUE,
    email VARCHAR(320) NOT NULL UNIQUE,
    senha VARCHAR(16) NOT NULL,
    foto TEXT(2048),
    bio VARCHAR(40)
);

CREATE TABLE Postagem (
	idPostagem INT PRIMARY KEY AUTO_INCREMENT,
    fkUsuario INT NOT NULL,
    CONSTRAINT Postagem_fkUsuario FOREIGN KEY (fkUsuario) REFERENCES Usuario(idUsuario),
    idJogo INT,
    tipoPostagem VARCHAR(45) NOT NULL,
    dataPostagem DATETIME,
    conteudoPostagem VARCHAR(255) NOT NULL
);

CREATE TABLE Curtida (
	fkUsuario INT,
    fkPostagem INT,
    CONSTRAINT Curtida_fkUsuario FOREIGN KEY (fkUsuario) REFERENCES Usuario(idUsuario),
    CONSTRAINT Curtida_fkPostagem FOREIGN KEY (fkPostagem) REFERENCES Postagem(idPostagem),
    PRIMARY KEY (fkUsuario, fkPostagem)
);

CREATE TABLE Comentario (
	fkUsuario INT,
    fkPostagem INT,
    CONSTRAINT Comentario_fkUsuario FOREIGN KEY (fkUsuario) REFERENCES Usuario(idUsuario),
    CONSTRAINT Comentario_fkPostagem FOREIGN KEY (fkPostagem) REFERENCES Postagem(idPostagem),
    PRIMARY KEY (fkUsuario, fkPostagem),
    conteudoComentario VARCHAR(140)
);

CREATE TABLE Usuario_Jogo (
	idRegistro INT PRIMARY KEY AUTO_INCREMENT,
	fkUsuario INT,
    CONSTRAINT Usuario_Jogo_fkUsuario FOREIGN KEY (fkUsuario) REFERENCES Usuario(idUsuario),
    idJogo INT,
    UNIQUE (fkUsuario, idJogo),
    statusUsuarioJogo VARCHAR(15) NOT NULL,
    imagem VARCHAR(2048),
    titulo VARCHAR(200)
);

CREATE TABLE Critica (
	idCritica INT AUTO_INCREMENT,
    fkUsuario INT,
    CONSTRAINT Critica_fkUsuario FOREIGN KEY (fkUsuario) REFERENCES Usuario(idUsuario),
    PRIMARY KEY(idCritica, fkUsuario),
    nota DECIMAL(2,1) NOT NULL,
    texto TEXT(500)
);

CREATE TABLE Seguidor_Seguido (
	fkSeguidor INT,
    fkSeguido INT,
    FOREIGN KEY (fkSeguidor) REFERENCES Usuario(idUsuario),
    FOREIGN KEY (fkSeguido) REFERENCES Usuario(idUsuario),
    PRIMARY KEY (fkSeguidor, fkSeguido)
);

CREATE TABLE Genero (
	fkUsuario INT,
    fkJogo INT,
    FOREIGN KEY (fkUsuario) REFERENCES Usuario_Jogo(fkUsuario),
    FOREIGN KEY (fkJogo) REFERENCES Usuario_Jogo(idJogo),
    nomeGenero VARCHAR(30)
)