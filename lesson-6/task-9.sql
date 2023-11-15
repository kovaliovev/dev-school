CREATE TABLE users(
    user_id int PRIMARY KEY,
    username varchar(50) NOT NULL UNIQUE,
    email varchar(50) NOT NULL UNIQUE,
    first_name varchar(50) NOT NULL,
    last_name varchar(50) NOT NULL,
    password varchar(50) NOT NULL
);

INSERT INTO users
VALUES (1, 'pisiapopa', 'fictadvisor@gmail.com', 'Zhenia', 'Academy Dinosaur', 'sasi332');

SELECT * FROM users