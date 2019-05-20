exports.up = function(knex) {
    return knex.schema
  .createTable("category",tbl=>{
    tbl
      .increments() //primary key
    tbl
      .string("category",50) //description column
     // .notNullable()
    tbl
      .integer("recipe_id")
      .unsigned()
      //.notNullable()
      .references('id')
      .inTable('recipe')
      .onDelete('RESTRICT')
      .onUpdate('RESTRICT')
  })
  .createTable("recipe",tbl=>{
    tbl
      .increments() //primary key
    tbl
      .string("title",50) //description column
      //.notNullable()
    tbl
      .string("instructions")
  })
  .createTable("source",tbl=>{
    tbl.increments() //primary key
  
    tbl.string("name",50) //description column
       // .notNullable()
    tbl
      .integer("recipe_id")
      .unsigned()
      //.notNullable()
      .references('id')
      .inTable('recipe')
      .onDelete('RESTRICT')
      .onUpdate('RESTRICT')
  })
  .createTable("recipe_ingredients",tbl=>{
    tbl
      .increments()//primary key
    tbl
      .integer("recipe_id")
      .unsigned()
     // .notNullable()
      .references('id')
      .inTable('recipe')
      .onDelete('RESTRICT')
      .onUpdate('RESTRICT')
    tbl
      .integer("ingredient_id")
      .unsigned()
    //  .notNullable()
      .references('id')
      .inTable('ingredient')
      .onDelete('RESTRICT')
      .onUpdate('RESTRICT')
  })
  .createTable("ingredient",tbl=>{
    tbl
      .increments() //primary key
    tbl
      .string("ingredient",100) //ingredient column
  })
  };
  
  exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('ingredient')
        .dropTableIfExists('recipe_ingredients')
        .dropTableIfExists('source')
        .dropTableIfExists('recipe')
        .dropTableIfExists('category')
  };