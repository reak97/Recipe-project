CREATE DATABASE IF NOT EXISTS recypher_db;

CREATE TABLE type_of_diet (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name ENUM('omnivorx', 'veganx', 'vegetarianx', 'keto') NOT NULL UNIQUE
);

CREATE TABLE Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    diet_type_id INT,
    FOREIGN KEY (diet_type_id) REFERENCES type_of_diet(id)
);

-- Tabla de recetas
CREATE TABLE Recipes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES Users(id)
);

-- Tabla de pasos para las recetas
CREATE TABLE Steps (
    id INT AUTO_INCREMENT PRIMARY KEY,
    step_number INT NOT NULL,
    description TEXT NOT NULL,
    recipe_id INT,
    FOREIGN KEY (recipe_id) REFERENCES Recipes(id)
);