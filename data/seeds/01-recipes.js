
exports.seed = function(knex) {
  return knex('recipes').del()
    .then(function () {
      return knex('recipes').insert([
        {id: 1, recipe: 'recipe1'},
        {id: 2, recipe: 'recipe2'},
        {id: 3, recipe: 'recipe3'}
      ]);
    });
};
