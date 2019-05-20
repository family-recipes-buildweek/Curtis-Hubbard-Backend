
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredient').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredient').insert([
        {ingredient: "cheese"},
        {ingredient: "mayo"},
        {ingredient: "bread"},
        {ingredient: "Meat"},
        {ingredient: "veggies"},
        {ingredient: "pizza dough"},
        {ingredient: "pancake batter"}
      ]);
    });
};
