
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('category').del()
    .then(function () {
      // Inserts seed entries
      return knex('category').insert([
        {category: "breakfast",recipe_id:1},
        {category: "lunch",recipe_id:2},
        {category: "dinner",recipe_id:3}
      ]);
    });
};
