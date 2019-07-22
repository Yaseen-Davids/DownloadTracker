const express = require("express");
const router = express.Router();
const knex = require("../knex");

const throwMsg = (response, res) => {
  return res.send({
    message: {
      value: response
    }
  })
};

/* GET ALL MOVIES */
router.get("/", async (req, res, next) => {
  try {
    const data = await knex("movies").orderBy("title").select("*");
    await res.send(data);
  } catch (e) {
    next();
    throwMsg("Error getting movies", res);
  }
});

/* GET MOVIE BY ID */
router.get("/:id", async (req, res, next) => {
  try {
    const data = await knex("movies").select("*").where("id", req.params.id)
    await res.send(data);
  } catch (e) {
    next();
    throwMsg("Error getting movie", res);
  }
})

/* POST NEW MOVIE */
router.post("/", async (req, res, next) => {
  try {
    await knex("movies").select("*").insert({
      title: req.body.title,
    });
    res.send({message: {
      value: "Successfully added a new movie"
    }});
  } catch (e) {
    next();
    throwMsg("Error updating movie", res);
  }
});

/* UPDATE MOVIE BY ID */
router.put("/:id", async (req, res, next) => {
  try {
    await knex("movies").select("*").where("id", req.params.id).update({
      title: req.body.title
    });
    res.send({message: {
      value: "Successfully updated a movie"
    }});
  } catch (e) {
    next();
    throwMsg("Error updating movie", res);
  }
})

/* DELETE MOVIE BY ID */
router.delete("/:id", async (req, res, next) => {
  try {
    await knex("movies").select("*").where("id", req.params.id).del();
    res.send({message: {
      value: "Successfully deleted a movie"
    }});
  } catch (e) {
    next();
    throwMsg("Error deleting movie");
  }
})

module.exports = router;