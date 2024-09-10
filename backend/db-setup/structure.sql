CREATE DATABASE IF NOT EXISTS recypher_db;

CREATE TABLE Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    user_name VARCHAR(255),
    email VARCHAR(255),
    avatar VARCHAR(255),
    role VARCHAR(255),
    password VARCHAR(255)
);

CREATE TABLE Type_of_diet (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255)
);

CREATE TABLE Recipes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    ingredients VARCHAR(255),
    user_id INT,
    presentation_photo INT,
    qualification INT,
    preparation_time INT,
    rations INT,
    FOREIGN KEY (user_id) REFERENCES Users(id)
);

CREATE TABLE Steps (
    id INT AUTO_INCREMENT PRIMARY KEY,
    recipe_id INT,
    description VARCHAR(255),
    photo INT,
    FOREIGN KEY (recipe_id) REFERENCES Recipes(id)
);

CREATE TABLE Users_type_of_diet (
    id INT AUTO_INCREMENT PRIMARY KEY,
    recipe_id INT,
    diet_id INT,
    FOREIGN KEY (recipe_id) REFERENCES Recipes(id),
    FOREIGN KEY (diet_id) REFERENCES Type_of_diet(id)
);

CREATE TABLE Recipes_type_of_diet (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    diet_id INT,
    FOREIGN KEY (user_id) REFERENCES Users(id),
    FOREIGN KEY (diet_id) REFERENCES Type_of_diet(id)
);


