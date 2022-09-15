const router = require("express").Router();
const Course = require("../models/BookingModel")

// Get post
router.get("/", async (req, res) => {
    try {
        const bookings = await Course.find();

        res.status(200).json(bookings);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
