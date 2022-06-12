-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!
/* para workbench - local - desenvolvimento */
CREATE DATABASE GuildDB;
USE GuildDB;

CREATE TABLE Usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nomeUsuario VARCHAR(20) NOT NULL,
    email TEXT(320) NOT NULL,
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
	fkUsuario INT,
    CONSTRAINT Usuario_Jogo_fkUsuario FOREIGN KEY (fkUsuario) REFERENCES Usuario(idUsuario),
    idJogo INT,
    PRIMARY KEY (fkUsuario, idJogo),
    statusUsuarioJogo VARCHAR(15) NOT NULL
);

CREATE TABLE Critica (
	idCritica INT AUTO_INCREMENT,
    fkUsuario INT,
    CONSTRAINT Critica_fkUsuario FOREIGN KEY (fkUsuario) REFERENCES Usuario(idUsuario),
    PRIMARY KEY(idCritica, fkUsuario),
    nota DECIMAL(2,1) NOT NULL,
    texto TEXT(500)
);


/* para sql server - remoto - produção */
CREATE TABLE usuario (
	id INT PRIMARY KEY IDENTITY(1,1),
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
);

CREATE TABLE aviso (
	id INT PRIMARY KEY IDENTITY(1,1),
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT FOREIGN KEY REFERENCES usuario(id)
);

create table aquario (
/* em nossa regra de negócio, um aquario tem apenas um sensor */
	id INT PRIMARY KEY IDENTITY(1,1),
	descricao VARCHAR(300)
);

/* altere esta tabela de acordo com o que está em INSERT de sua API do arduino */

CREATE TABLE medida (
	id INT PRIMARY KEY IDENTITY(1,1),
	dht11_umidade DECIMAL,
	dht11_temperatura DECIMAL,
	luminosidade DECIMAL,
	lm35_temperatura DECIMAL,
	chave TINYINT,
	momento DATETIME,
	fk_aquario INT FOREIGN KEY REFERENCES aquario(id)
);
