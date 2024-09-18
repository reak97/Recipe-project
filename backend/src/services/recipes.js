const { Recipes, Categories, Ingredients, Nationalities, Steps, Comments, Type_of_diet  } = require ("../database/models"); 

const recipeService = {
    getAllRecipes: () => {
        return Recipes.findAll({
            include
        })
    }
}