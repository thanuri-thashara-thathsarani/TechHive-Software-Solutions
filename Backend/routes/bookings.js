const express = require("express");
const router = express.Router();
const db = require("../config/db");
router.get("/", (req, res) => {

    const sql = `
        SELECT
            bookings.id,
            bookings.customer_name,
            bookings.email,
            bookings.phone,
            services.service_name,
            bookings.booking_date
        FROM bookings
        JOIN services
        ON bookings.service_id = services.id
    `;

    db.query(sql, (err, results) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(results);
    });
});

router.post("/", (req, res) => {

    const {
        customer_name,
        email,
        phone,
        service_id
    } = req.body;

    const sql = `
        INSERT INTO bookings
        (customer_name, email, phone, service_id)
        VALUES (?, ?, ?, ?)
    `;

    db.query(
        sql,
        [customer_name, email, phone, service_id],
        (err, result) => {

            if (err) {
    console.log(err);
    return res.status(500).json({
        message: err.sqlMessage
    });
}

            res.json({
                message: "Booking created successfully"
            });
        }
    );
});

module.exports = router;