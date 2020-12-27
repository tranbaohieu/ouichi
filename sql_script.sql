create table users(
    id SERIAL,
    email varchar(20) not null,
    passwords varchar(20) not null,
    rooms int[],
    PRIMARY KEY (id)
);

create table room(
    id SERIAL,
    type int,
    descriptions varchar(100),
    userId int
);

create table images(
    id SERIAL,
    link varchar(100),
    roomID int
);

create table furniture(
    id SERIAL,
    names varchar(50),
    cost float,
    namesofproduct varchar(50),
    roomId int
);

select * from users 
where email = 'trihieu@gmail.com';

INSERT INTO users (email, passwords)
VALUES ('trihieua2@gmail.com', '123456');


select * from room ;

INSERT INTO room (type, descriptions, userId)
VALUES ( 1, 'trihieua2@gmail.com', 1);


