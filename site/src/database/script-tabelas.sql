-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql - banco local - ambiente de desenvolvimento
*/
CREATE DATABASE beautymakeup;
USE beautymakeup;

CREATE TABLE usuario (
idUsuario INT PRIMARY KEY auto_increment,
nome VARCHAR(45),
sobrenome VARCHAR(45),
email VARCHAR(45),
senha VARCHAR(15));

CREATE TABLE avaliacao (
idAvaliacao INT  PRIMARY KEY auto_increment,
post text);

CREATE TABLE VotosUsuario (
fkUsuario INT,
fkVotacao INT,
   CONSTRAINT fkVotos FOREIGN KEY (fkUsuario) references usuario(idUsuario),
      CONSTRAINT fkVotosUs FOREIGN KEY (fkVotacao) references avaliacao(idAvaliacao),
        CONSTRAINT pkComposta PRIMARY KEY (fkUsuario, fkVotacao));
     

   INSERT INTO avaliacao VALUES 
      (null, 'MELASMA: Como maquiar as manchas?'),
      (null, 'Como usar corretivo colorido na maquiagem da maneira certa'),
      (null, '15 itens que não podem faltar em sua nécessarie para fazer uma maquiagem'),
      (null, 'Como fazer a maquiagem durar mais'),
      (null, 'Tutorial : Maquiagem para os olhos'),
      (null, '6 Dicas de beleza para incluir na rotina de cuidados');

      select count(idAvaliacao) as votacao, fkVotacao from VotosUsuario join Avaliacao on fkVotacao = idAvaliacao group by idAvaliacao order by fkVotacao;
   
/*
comandos para criar usuário em banco de dados azure, sqlserver,
com permissão de insert + update + delete + select
*/

CREATE USER [usuarioParaAPIWebDataViz_datawriter_datareader]
WITH PASSWORD = '#Gf_senhaParaAPIWebDataViz',
DEFAULT_SCHEMA = dbo;

EXEC sys.sp_addrolemember @rolename = N'db_datawriter',
@membername = N'usuarioParaAPIWebDataViz_datawriter_datareader';

EXEC sys.sp_addrolemember @rolename = N'db_datareader',
@membername = N'usuarioParaAPIWebDataViz_datawriter_datareader';
