const express = require("express");
const router = express.Router();
const db = require("../config/db");

router.post("/", (req, res) => {

    const {
        name,
        email,
        message
    } = req.body;

    const sql = `
        INSERT INTO contacts
        (name, email, message)
        VALUES (?, ?, ?)
    `;

    db.query(
        sql,
        [name, email, message],
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                message: "Message sent successfully"
            });
        }
    );
});
router.get("/", (req, res) => {

    const sql = `
        SELECT *
        FROM contacts
        ORDER BY submitted_at DESC
    `;

    db.query(sql, (err, results) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(results);
    });
});

module.exports = router;