
exports.seed = function(knex) {
  return knex('instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {id: 1, instruction: 'fghfdgh', instruction_number: 1, recipe_id: 1},
        {id: 2, instruction: 'sfsdf', instruction_number: 1, recipe_id: 2},
        {id: 3, instruction: 'dfgdfg', instruction_number: 2, recipe_id: 2},
        {id: 4, instruction: 'sdfsfsfd', instruction_number: 1, recipe_id: 3},
      ]);
    });
};
