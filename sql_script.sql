create table users(
    id SERIAL,
    email varchar(20) not null,
    passwords varchar(20) not null,
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
where email = 'trihieu@gmail.com'

INSERT INTO users (email, passwords)
VALUES ('trihieua2@gmail.com', '123456');


select * from room 

INSERT INTO room (type, descriptions, userId)
VALUES ( 1, 'trihieua2@gmail.com', 1);


insert into room (descriptions, image1, image2, image3) 
  values ('Nổi bật với hình ảnh bông sen vàng, tượng trưng cho sự trong trắng, thuần khiết','','','')


  insert into room (descriptions, image1, image2, image3) 
  values ('Nổi bật với hình ảnh bông sen vàng, tượng trưng cho sự trong trắng, thuần khiết','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS83wKPaV7faY_mFvIIE89NfIXqTnnPtws7AQ&usqp=CAU','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNyXwogmySVrOm-tz46wQjEo7X_Q2k4y2naQ&usqp=CAU','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYjLlugUFGj32Sypp3vZKVQW9SBEZSmlccbg&usqp=CAU')

  insert into room (descriptions, image1, image2, image3) 
  values ('Nổi bật với hình ảnh bông sen vàng, tượng trưng cho sự trong trắng, thuần khiết','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvhSeKYf6qY9wTtzMmwL-4_E6YOJRpNYPu2g&usqp=CAU','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN6BY_0Y42COkCExgzk2AtEqmAZ7Nrrd1ztw&usqp=CAU','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Yyjy-M5HNNtEVQ3JMYRRGJNNZImEQ_nIlA&usqp=CAU')
insert into room (descriptions, image1, image2, image3) 
  values ('Nổi bật với hình ảnh bông sen vàng, tượng trưng cho sự trong trắng, thuần khiết','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmkeH0LRtROS7PGVbNfsdJcASc6JopuzvNJg&usqp=CAU','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsBSroYBtOdb9M8Im-G-X3dfCPvi86aRPnYg&usqp=CAU','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSsrmldgFrO5XAK_QrdaqbGkYMRUngfcR8bQ&usqp=CAU')

  