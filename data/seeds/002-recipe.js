
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe').insert([
        {title: "pancake",instructions:"create batter, heat on pan till golden brown"},
        {title: "sandwich",instructions:"grab bread and meet and condiments, put all together"},
        {title: "pizza",instructions:"add cheese,sauce and veggies"}
      ]);
    });
};
