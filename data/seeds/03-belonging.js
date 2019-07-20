
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('belonging').del()
    .then(function () {
      // Inserts seed entries
      return knex('belonging').insert([
        {id: 1, recipe_id:1, ingredient_id: 1, quantity: '300gr'},
        {id: 2, recipe_id: 2, ingredient_id: 2, quantity: '400gr'},
        {id: 3, recipe_id: 2, ingredient_id: 3, quantity: '500gr'},
        {id: 4, recipe_id: 3, ingredient_id: 4, quantity: '600gr'},
        {id: 5, recipe_id: 3, ingredient_id: 5, quantity: '700gr'}
      ]);
    });
};
