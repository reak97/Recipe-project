CREATE DATABASE IF NOT EXISTS recypher_db;

-- Tabla de usuarios
CREATE TABLE Users (
    id UUID PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    user_name VARCHAR(255) UNIQUE,
    email VARCHAR(255) UNIQUE,
    avatar VARCHAR(255),
    role INT DEFAULT 0,  -- 0 = usuario común, 1 = administrador
    password VARCHAR(255)
);

-- Tabla de tipos de dieta
CREATE TABLE Type_of_diet (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255)
);

-- Tabla de recetas
CREATE TABLE Recipes (
    id UUID PRIMARY KEY,
    title VARCHAR(255),
    user_id UUID,
    presentation_photo VARCHAR(255),
    qualification FLOAT CHECK (qualification >= 0 AND qualification <= 5),
    preparation_time FLOAT,
    rations INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(id)
);

-- Tabla de pasos de recetas
CREATE TABLE Steps (
    id UUID PRIMARY KEY,
    recipe_id UUID,
    instruction TEXT,
    step_order INT,
    FOREIGN KEY (recipe_id) REFERENCES Recipes(id)
);

-- Tabla de categorías
CREATE TABLE Categories (
    id UUID PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

-- Tabla de ingredientes
CREATE TABLE Ingredients (
    id UUID PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);


-- Tabla de nacionalidades
CREATE TABLE Nationalities (
    id INT AUTO_INCREMENT PRIMARY KEY,
    country_name VARCHAR(255) NOT NULL,
    country_code VARCHAR(255) NOT NULL,
    flag VARCHAR(255)
);

-- Tabla de relación muchos a muchos: recetas y categorías
CREATE TABLE Recipes_Categories (
    id UUID PRIMARY KEY,
    id_recipe UUID,
    id_category UUID,
    FOREIGN KEY (id_recipe) REFERENCES Recipes(id),
    FOREIGN KEY (id_category) REFERENCES Categories(id)
);

-- Tabla de relación muchos a muchos: recetas e ingredientes
CREATE TABLE Recipes_Ingredients (
    id UUID PRIMARY KEY,
    id_recipe UUID,
    id_ingredient UUID,
    FOREIGN KEY (id_recipe) REFERENCES Recipes(id),
    FOREIGN KEY (id_ingredient) REFERENCES Ingredients(id)
);

-- Tabla de relación muchos a muchos: recetas y nacionalidades
CREATE TABLE Recipes_Nationalities (
    id UUID PRIMARY KEY,
    id_recipe UUID,
    id_nationality INT,
    FOREIGN KEY (id_recipe) REFERENCES Recipes(id),
    FOREIGN KEY (id_nationality) REFERENCES Nationalities(id)
);

-- Tabla de comentarios de recetas
CREATE TABLE Comments (
    id UUID PRIMARY KEY,
    id_recipe UUID,
    id_user UUID,
    content TEXT NOT NULL,
    rating INT CHECK (rating >= 1 AND rating <= 5),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_recipe) REFERENCES Recipes(id),
    FOREIGN KEY (id_user) REFERENCES Users(id)
);

-- Tabla de relación usuarios y tipos de dieta
CREATE TABLE Users_type_of_diet (
    id UUID PRIMARY KEY,
    id_user UUID,
    id_diet INT,
    FOREIGN KEY (id_user) REFERENCES Users(id),
    FOREIGN KEY (id_diet) REFERENCES Type_of_diet(id)
);

-- Tabla de relación recetas y tipos de dieta
CREATE TABLE Recipes_type_of_diet (
    id UUID PRIMARY KEY,
    id_recipe UUID,
    id_diet INT,
    FOREIGN KEY (id_recipe) REFERENCES Recipes(id),
    FOREIGN KEY (id_diet) REFERENCES Type_of_diet(id)
);

