exports.up = (knex) => {
  return knex.schema.createTable("series", (table) => {
      table.increments("id").primary()
      table.string("title")
      table.float("season")
      table.float("episode")
      table.timestamp("created_at").defaultTo(knex.fn.now())
    })
    .createTable("movies", (table) => {
      table.increments("id")
      table.string("title")
      table.timestamp("created_at").defaultTo(knex.fn.now())
    })
};

exports.down = (knex) => {
  return knex.schema.dropTable("series").dropTable("movies")
};