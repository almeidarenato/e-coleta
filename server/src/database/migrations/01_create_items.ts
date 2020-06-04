import Knex from "knex"; //para trazer as definições do Knex

export async function up(knex: Knex) {
  return knex.schema.createTable("items", (table) => {
    table.increments("id").primary();
    table.string("image").notNullable();
    table.integer("title").notNullable();
  });
}
export async function down(knex: Knex) {
  return knex.schema.dropTable("items");
}
