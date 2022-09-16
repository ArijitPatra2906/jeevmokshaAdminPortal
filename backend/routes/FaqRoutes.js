const router = require("express").Router();

const Faq = require("../models/FaqModel")


//Create new faq
router.post("/", async (req, res) => {
    const newFaq = new Faq(req.body);
    try {
        const savedFaq = await newFaq.save();
        res.status(200).json(newFaq);
    } catch (err) {
        res.status(500).json(err);
    }
});

//Delete faq
router.delete("/:id", async (req, res) => {
    // try {
    const faq = await Faq.findById(req.params.id);
    // if (faq.username === req.body.username) {
    try {
        await faq.delete();
        res.status(200).json("Faq has been deleted!");
    } catch (err) {
        res.status(500).json(err);
    }
    //     } else {
    //         res.status(401).json("You can delete only your faq!");
    //     }
    // } catch (err) {
    //     res.status(500).json(err);
    // }
});

//Get all faq
router.get("/", async (req, res) => {
    try {
        const faqs = await Faq.find();

        res.status(200).json(faqs)

    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;