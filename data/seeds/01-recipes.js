
exports.seed = function(knex) {
  return knex('recipes').del()
    .then(function () {
      return knex('recipes').insert([
        {id: 1, recipe: 'recipe1', instructions: 'sadfsaf'},
        {id: 2, recipe: 'recipe2', instructions: 'trzt'},
        {id: 3, recipe: 'recipe3', instructions: 'fdghfgh'}
      ]);
    });
};
