
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('source').del()
    .then(function () {
      // Inserts seed entries
      return knex('source').insert([
        {name: "online"},
        {name: "grandma"},
        {name: "home-made"},
        
      ]);
    });
};
