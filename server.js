const express = require("express");
const db = require('./data/db.js');

const server = express();
server.use(express.json());

function getRecipes() {
  return db("recipes");
}

function getIngredients() {
  return db("ingredients");
}

function getShoppingList(id) {
  return db.select('ingredient', 'quantity').from('belonging')
  .innerJoin('recipes', 'recipes.id', 'belonging.recipe_id')
  .innerJoin('ingredients', 'ingredients.id', 'belonging.ingredient_id')
  .where({ recipe_id: id  });
}

function getInstructionForRecipe(id) {
  return db.select('instruction', 'instruction_number').from('instructions').where({ recipe_id: id  });
}

function deleteRecipe(id) {
  return db('recipes').where({ id }).delete();
}

function deleteIngredient(id) {
  return db('ingredients').where({ id }).delete();
}

server.get('/recipes', async (req, res, next) => {
  try {
    const result = await getRecipes();
    res.json(result);
  } catch (error) {
    next(error);
  }
});

server.get('/ingredients', async (req, res, next) => {
  try {
    const result = await getIngredients();
    res.json(result);
  } catch (error) {
    next(error);
  }
});

server.get('/recipe/:id', async (req, res, next) => {
  try {
    const result = await getShoppingList(req.params.id);
    res.json(result);
  } catch (error) {
    next(error);
  }
});

server.get('/instruction/:id', async (req, res, next) => {
  try {
    const result = await getInstructionForRecipe(req.params.id);
    res.json(result);
  } catch (error) {
    next(error);
  }
});

server.delete('/recipe/:id', async (req, res, next) => {
  try {
    const result = await deleteRecipe(req.params.id);
    res.json(result);
  } catch (error) {
    next(error);
  }
});

server.delete('/ingredient/:id', async (req, res, next) => {
  try {
    const result = await deleteIngredient(req.params.id);
    res.json(result);
  } catch (error) {
    next(error);
  }
});



module.exports = server;

