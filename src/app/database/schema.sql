CREATE SCHEMA IF NOT EXISTS `dbagendacontatos` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ;
USE `dbagendacontatos` ;

CREATE TABLE IF NOT EXISTS `dbagendacontatos`.`bdcontatos` (
  `idbdcontatos` INT(11) NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(50),
  `numerotelefone` VARCHAR(50) ,
  `email` VARCHAR(50),
PRIMARY KEY (`id`))
