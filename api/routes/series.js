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

// const data = await knex().select().from("series");
// await res.send(data);

/* GET ALL SERIES */
router.get("/", async (req, res, next) => {
  try {
    const data = await knex("series").orderBy("title").select("*");
    await res.send(data);
  } catch (e) {
    next();
    throwMsg("Error getting series", res);
  }
});

/* GET SERIES BY ID */
router.get("/:id", async (req, res, next) => {
  try {
    const data = await knex("series").select("*").where("id", req.params.id)
    await res.send(data);
  } catch (e) {
    next();
    throwMsg("Error getting series", res);
  }
})

/* POST NEW SERIES */
router.post("/", async (req, res, next) => {
  try {
    await knex("series").select("*").insert({
      title: req.body.title,
      season: req.body.season,
      episode: req.body.episode,
    });
    res.send({message: {
      value: "Successfully added a new series"
    }});
  } catch (e) {
    next();
    throwMsg("Error updating series", res);
  }
});

/* UPDATE SERIES BY ID */
router.put("/:id", async (req, res, next) => {
  try {
    await knex("series").select("*").where("id", req.params.id).update({
      title: req.body.title,
      season: req.body.season,
      episode: req.body.episode,
    });
    res.send({message: {
      value: "Successfully update series"
    }});
  } catch (e) {
    next();
    throwMsg("Error updating series", res);
  }
})

/* DELETE SERIES BY ID */
router.delete("/:id", async (req, res, next) => {
  try {
    await knex("series").select("*").where("id", req.params.id).del();
    res.send({message: {
      value: "Successfully deleted a series"
    }});
  } catch (e) {
    next();
    throwMsg("Error deleting series", res);
  }
})

module.exports = router;