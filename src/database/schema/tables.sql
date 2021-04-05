-- psql -h localhost -U postgres

-- create database costumerspanel;
 
-- \c costumerspanel;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

create table costumers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(50) UNIQUE,
    address VARCHAR(100) NOT NULL,
    cpf BIGINT UNIQUE NOT NULL,
    createdAt DATE NOT NULL DEFAULT CURRENT_DATE
)
