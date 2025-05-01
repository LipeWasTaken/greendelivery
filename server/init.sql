-- server/init.sql

CREATE TABLE IF NOT EXISTS restaurants (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    address TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS orders (
    id SERIAL PRIMARY KEY,
    client_name TEXT NOT NULL,
    dish_name TEXT NOT NULL,
    restaurant_id INTEGER REFERENCES restaurants(id)
);
