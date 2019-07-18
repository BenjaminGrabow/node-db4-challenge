exports.seed = function(knex) {
  return knex('belonging').del()
    .then(function () {
      return knex('belonging').insert([
        {id: 1, ingredient_id: 1, recipe_id: 1},
        {id: 2, ingredient_id: 2, recipe_id: 2},
        {id: 3, ingredient_id: 3, recipe_id: 3}
      ]);
    });
};
