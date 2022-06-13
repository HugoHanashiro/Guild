-- drop database GuildDB;
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

CREATE TABLE Usuario_Jogo (
	idRegistro INT PRIMARY KEY AUTO_INCREMENT,
	fkUsuario INT NOT NULL,
    CONSTRAINT Usuario_Jogo_fkUsuario FOREIGN KEY (fkUsuario) REFERENCES Usuario(idUsuario),
    idJogo INT NOT NULL,
    UNIQUE (fkUsuario, idJogo),
    statusUsuarioJogo VARCHAR(15) NOT NULL,
    imagem VARCHAR(2048),
    titulo VARCHAR(200)
);

CREATE TABLE Genero (
	fkRegistro INT NOT NULL,
    FOREIGN KEY (fkRegistro) REFERENCES Usuario_Jogo(idRegistro),
    nomeGenero VARCHAR(30)
);

SELECT idRegistro FROM Usuario_Jogo;

SELECT idRegistro FROM Usuario_Jogo WHERE fkUsuario = 1 AND idJogo = 3498;
SELECT * FROM Usuario_Jogo;
SELECT * FROM Genero;

SELECT DISTINCT nomeGenero FROM Genero;
SELECT COUNT(DISTINCT nomeGenero) FROM Genero;
SELECT COUNT(*) AS 'Ocorrencias' FROM Genero WHERE nomeGenero = 'RPG';