const recipeService = require("../../services/recipes");

module.exports = {
    list: async (req, res) => {
        try {
            const recipes = await recipeService.getallRecipes();
            
        }
    }
}