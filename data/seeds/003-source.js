
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('source').del()
    .then(function () {
      // Inserts seed entries
      return knex('source').insert([
        {name: "online", recipe_id:1},
        {name: "grandma", recipe_id:2},
        {name: "home-made", recipe_id:3},
        
      ]);
    });
};
