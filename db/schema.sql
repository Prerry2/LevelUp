CREATE DATABASE levelup_db;

USE levelup_db;

CREATE TABLE users (
	id INT AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    password VARCHAR(20) NOT NULL,
    avatar TINYINT NOT NULL,
    PRIMARY KEY (id)
)

