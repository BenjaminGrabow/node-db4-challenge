
exports.up = function(knex) {
  return knex.schema.createTable('recipes', table => {
    table.increments();
    table.text('recipe', 300).notNullable().unique()
    table.text('instructions', 500).notNullable();
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
      .inTable("ingredients")
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      table
      .integer("recipe_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("recipes")
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
      table.text('quantity', 200).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('recipes')
  .dropTableIfExists('ingredients')
  .dropTableIfExists('belonging');
};
