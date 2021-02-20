const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

router.get("/", (req, res) => {
  const sqlQuery = `SELECT * FROM oee
                    ORDER BY machine_number;`;
  pool.query(sqlQuery)
    .then((response) => res.send(response.rows))
    .catch((err) => res.sendStatus(500));
});

router.get("/hourly-numbers/:id", (req, res) => {
  const id = [req.params.id];
  const sqlQuery = `SELECT * FROM
                      (SELECT hn.id, hn.hourly, hn.oee_reading, o.machine_number FROM oee_hourly_numbers hn
                      JOIN oee o ON o.id = hn.machine_id
                      WHERE o.machine_number = $1
                      ORDER BY hn.id DESC
                      LIMIT '5') AS q
                    ORDER BY q.id ASC;`;
  pool.query(sqlQuery, id)
    .then((response) => res.send(response.rows))
    .catch((err) => res.sendStatus(500));
});

// not currently in use, potentially to post automated readings every hour
router.post("/", (req, res) => {
  const dataToPost = [req.machine_id, req.hourly, req.oee_reading];
  const sqlQuery = `INSERT INTO oee_hourly_numbers (machine_id, hourly, oee_reading)
                    VALUES ($1, $2, $3);`;
  pool.query(sqlQuery, dataToPost)
    .then(res.sendStatus(201))
    .catch((err) => res.sendStatus(500));
});

module.exports = router;
