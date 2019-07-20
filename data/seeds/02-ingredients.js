
exports.seed = function(knex) {
  return knex('ingredients').del()
    .then(function () {
      return knex('ingredients').insert([
        {id: 1, ingredient: 'ingredientfor1'},
        {id: 2, ingredient: 'ingredientfor2'},
        {id: 3, ingredient: 'ingredientfor2(second)'},
        {id: 4, ingredient: 'ingredientfor3'},
        {id: 5, ingredient: 'ingredientfor3(second)'},
      ]);
    });
};

