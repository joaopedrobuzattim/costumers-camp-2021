create table costumers (
    id UUID NOT NULL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(50) UNIQUE,
    address VARCHAR(50) NOT NULL,
    cpf BIGINT UNIQUE,
    createdAt DATE NOT NULL
)

create table products (
    id UUID NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    price NUMERIC(4,2) NOT NULL,
    description VARCHAR(100) NOT NULL 
)

create table orders (
    id UUID NOT NULL PRIMARY KEY,
    costumer_id UUID REFERENCES costumers(id) NOT NULL,
    product_id UUID REFERENCES products(id) NOT NULL,
    status VARCHAR(30) NOT NULL CHECK(status = 'Delivered' OR status = 'In transit' OR status = 'Ordered' ) DEFAULT 'Ordered'
)

insert into costumers (id, first_name, last_name, email, address, cpf, createdAt) values (uuid_generate_v4(), 'Pepi', 'Quaife', null, '38 Ohio Hill',06348981088 , '4/1/2021');
insert into costumers (id, first_name, last_name, email, address, cpf, createdAt) values (uuid_generate_v4(), 'Terra', 'Pattlel', null, '25451 Lakeland Pass',31683613058 , '4/1/2021');
insert into costumers (id, first_name, last_name, email, address, cpf, createdAt) values (uuid_generate_v4(), 'Jeffrey', 'Demchen', 'jdemchen2@ucoz.com', '4 Darwin Lane',87729188023 , '4/2/2021');
insert into costumers (id, first_name, last_name, email, address, cpf, createdAt) values (uuid_generate_v4(), 'Sheffield', 'Loughren', 'sloughren3@about.me', '78719 Monica Drive',30743100069 , '4/1/2021');
insert into costumers (id, first_name, last_name, email, address, cpf, createdAt) values (uuid_generate_v4(), 'Mellicent', 'Edwicke', null, '4 Sachs Park',89770611050 , '4/2/2021');
insert into costumers (id, first_name, last_name, email, address, cpf, createdAt) values (uuid_generate_v4(), 'Tessa', 'Cargon', null, '6505 Prairie Rose Point',05108696027 , '4/2/2021');
insert into costumers (id, first_name, last_name, email, address, cpf, createdAt) values (uuid_generate_v4(), 'Faustina', 'Prettyman', 'fprettyman6@who.int', '486 Sycamore Point',20070441022 , '4/2/2021');
insert into costumers (id, first_name, last_name, email, address, cpf, createdAt) values (uuid_generate_v4(), 'Perkin', 'Folca', 'pfolca7@netlog.com', '3058 Springs Pass',82083989007 , '4/1/2021');
insert into costumers (id, first_name, last_name, email, address, cpf, createdAt) values (uuid_generate_v4(), 'Mohammed', 'Maxwale', 'mmaxwale8@sogou.com', '57 Reindahl Parkway',38379727045 , '4/1/2021');
insert into costumers (id, first_name, last_name, email, address, cpf, createdAt) values (uuid_generate_v4(), 'Simone', 'Scimonelli', null, '170 Utah Park',83402831031 , '4/2/2021');