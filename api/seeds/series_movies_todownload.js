
exports.seed = async (knex) => {
  await knex("series").del()
  await knex("series").insert([
    {title: "Stranger Things", season: 3, episode: 4},
    {title: "Dark", season: 1, episode: 1},
    {title: "Blue Mountain State", season: 5, episode: 2},
  ]);
  await knex("movies").del()
  await knex("movies").insert([
    {title: "Avengers Endgame"},
    {title: "Spider-Man Homecoming"},
  ])
};
