
exports.up = async function(knex) {
  
    await knex.schema.createTable("carSpecs", (table) => {
        table.increments("id")
        table.text("VIN").notNull().unique()
        table.text("make").notNull()
        table.text("model").notNull()
        table.integer("mileage").notNull()
        table.text("transmissionType").defaultTo("unknown")
        table.text("titleStatus").defaultTo("unknown")
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("carSpecs")
  }
