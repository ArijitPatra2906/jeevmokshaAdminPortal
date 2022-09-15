const router = require("express").Router()
const AdminUser = require("../models/AdminUser");
const bcrypt = require("bcrypt");
const generateToken = require("../config/generateToken");

//register
router.post("/register", async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);
        const newAdminUser = new AdminUser({
            username: req.body.username,
            email: req.body.email,
            password: hashedPass,
        });

        const adminUser = await newAdminUser.save();
        res.status(200).json(adminUser);
    } catch (err) {
        res.status(500).json(err);
    }
});


//Login
router.post("/login", async (req, res) => {
    try {
        const user = await AdminUser.findOne({ email: req.body.email });
        !user && res.status(400).json("User doesnot exist");

        const validated = await bcrypt.compare(req.body.password, user.password);
        !validated && res.status(400).json("Wrong credntialS");

        const { password, ...others } = user._doc;
        res.status(200).json(others);
    } catch (err) {
        res.status(500).json(err);
    }
});
module.exports = router;