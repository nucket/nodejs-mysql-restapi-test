CREATE DATABASE IF NOT EXISTS companydb;

-- DB=systeeldb
-- DB_USER=SQL
-- DB_PORT=3333
-- DB_PASSWORD= sql123
-- Windows Name Service= MySQL81

USE systeeldb;

CREATE TABLE rooms (
    id INT (11) NOT NULL AUTO_INCREMENT,
    name VARCHAR (50) DEFAULT NULL,
    valor1 INT (20) DEFAULT NULL, -- Salary
    PRIMARY KEY (id)
);

describe rooms;

INSERT INTO rooms VALUES
 (1, 'Zona1', 1000),
 (2, 'Zona2', 2000),
 (3, 'Lavagem_Caixa', 2500),
 (4, 'Lavagem_Caixa2', 1500);
