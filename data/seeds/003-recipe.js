
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe').insert([
        {title: "pancake",instructions:"create batter, heat on pan till golden brown",source_id:1,category_id:1},
        {title: "sandwich",instructions:"grab bread and meet and condiments, put all together",source_id:2,category_id:2},
        {title: "pizza",instructions:"add cheese,sauce and veggies",source_id:1,category_id:2}
      ]);
    });
};
