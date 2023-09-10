BEGIN

CREATE DATABASE trpcTodoList

CREATE TABLE users(
    user_id INT UNIQUE,
    username VARCHAR,
)

CREATE TABLE todos(
    todo_id INT UNIQUE,
    todo_name VARCHAR,
    todo VARCHAR
)

END;