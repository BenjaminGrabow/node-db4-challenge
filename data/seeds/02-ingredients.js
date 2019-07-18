
exports.seed = function(knex) {
  return knex('ingredients').del()
    .then(function () {
      return knex('ingredients').insert([
        {id: 1, ingredient: 'ingredient1'},
        {id: 2, ingredient: 'ingredient2'},
        {id: 3, ingredient: 'ingredient3'}
      ]);
    });
};
