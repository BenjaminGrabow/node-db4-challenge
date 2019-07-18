
exports.up = function(knex) {
  return knex.schema.createTable('recipes', table => {
    table.increments();
    table.text('recipe', 300).notNullable().unique();
  })
  .createTable('ingredients', table => {
    table.increments();
    table.text('ingredient', 300).notNullable();
  })
  .createTable("belonging", table => {
    table.increments();
    table
      .integer("ingredient_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("ingredients");
    table
      .integer("recipe_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("recipes");
  });
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('recipes')
  .dropTableIfExists('ingredients')
  .dropTableIfExists('belonging');
};
