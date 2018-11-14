USE LevelUp;

CREATE TABLE users (
    ID INT AUTO_INCREMENT NOT NULL,
    NAME VARCHAR(50),
    PASSWORD BINARY(60),
    PRIMARY KEY(ID)
);

CREATE TABLE sample_tasks (
id INT AUTO_INCREMENT,
title VARCHAR(100) NOT NULL,
notes VARCHAR(200),
difficulty BOOLEAN NOT NULL,
importance BOOLEAN NOT NULL,
type VARCHAR(50) NOT NULL,
category VARCHAR(30),
completed BOOLEAN NOT NULL, 
PRIMARY KEY (id)
);

INSERT INTO sample_tasks (title, notes, difficulty, importance, type, category, completed)
VALUES ('drink water', 'you need water to live!', 0, 1, 'routine', 'self-care', 0), ('grocery shop', 'you are out of food dummy!', 1, 1, 'task', 'self-care', 0);

CREATE TABLE sample_stats (
    id INT AUTO_INCREMENT,
    stat_name VARCHAR(30) NOT NULL,
    stat_score INT NOT NULL, 
    PRIMARY KEY (id)
);

INSERT INTO sample_stats (stat_name, stat_score)
VALUES ('exp', 1), ('health', 5), ('intelligence', 5), ('charisma', 5), ('vitality', 5), ('strength', 5);