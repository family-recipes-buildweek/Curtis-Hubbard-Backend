exports.up = function(knex) {
    return knex.schema
  .createTable("category",tbl=>{
    tbl
      .increments() //primary key
    tbl
      .string("category",50) //description column
      .notNullable()
  })
  .createTable("source",tbl=>{
     tbl.increments() //primary key
  
     tbl.string("name",50) //description column
        .notNullable()
  })
  .createTable("recipe",tbl=>{
    tbl
        .increments() //primary key
    tbl
        .string("title",50) //description column
        .notNullable()
    tbl
        .string("instructions")//instruction column
    tbl
      .integer("source_id")//FK to source
      .unsigned()
      .references('id')
      .inTable('source')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE')
    tbl
      .integer("category_id")//FK to category
      .unsigned()
      .references('id')
      .inTable('category')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE')
    })
  .createTable("ingredient",tbl=>{
    tbl
      .increments() //primary key
    tbl
      .string("ingredient",100) //ingredient column
  })
  .createTable("recipe_ingredients",tbl=>{
    tbl
      .increments()//primary key
    tbl
      .integer("recipe_id")
      .unsigned()
      .references('id')
      .inTable('recipe')
      .onDelete('RESTRICT')
      .onUpdate('RESTRICT')
    tbl
      .integer("ingredient_id")
      .unsigned()
      .references('id')
      .inTable('ingredient')
      .onDelete('RESTRICT')
      .onUpdate('RESTRICT')
  })
  };
  exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('recipe_ingredients')
        .dropTableIfExists('ingredient')
        .dropTableIfExists('recipe')
        .dropTableIfExists('source')
        .dropTableIfExists('category')
  };