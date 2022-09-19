const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const multer = require("multer");
const path = require("path");
const BlogRoutes = require("./routes/BlogRoutes")
const BookingRoutes = require("./routes/BookingRoutes")
const ContactRoutes = require("./routes/ContactRoutes")
const AdminUserRoutes = require("./routes/AdminUserRoutes")
const FaqRoutes = require("./routes/FaqRoutes");

dotenv.config();
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));

app.use(cors());
mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
        // useFindAndModify: true,
    })
    .then(console.log("connected to mongodb!!!"))
    .catch((err) => console.log(err));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images");
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name);
    },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded!!");
});


app.use("/api/auth", AdminUserRoutes);
app.use("/api/blogs", BlogRoutes);
app.use("/api/booking", BookingRoutes);
app.use("/api/contact", ContactRoutes);
app.use("/api/faq", FaqRoutes);


app.get("/", function (req, res) {
    res.status(200).send("server running")
})

app.listen(process.env.PORT || 7000, () => {
    console.log("running backend");
});
