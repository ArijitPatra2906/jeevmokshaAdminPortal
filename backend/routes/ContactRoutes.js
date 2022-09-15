const router = require("express").Router();
const Contact = require("../models/ContactModel")

// Get post
router.get("/", async (req, res) => {
    try {
        const contacts = await Contact.find();

        res.status(200).json(contacts);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;