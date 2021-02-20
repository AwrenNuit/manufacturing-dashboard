const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

router.get("/", (req, res) => {
  const sqlQuery = `SELECT * FROM oee
                  ORDER BY machine_number;`;
  pool.query(sqlQuery)
    .then((result) => res.send(result.rows))
    .catch((err) => res.sendStatus(500));
});

module.exports = router;
