const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const BlogRoutes = require("./routes/BlogRoutes")
const BookingRoutes = require("./routes/BookingRoutes")
const ContactRoutes = require("./routes/ContactRoutes")
const AdminUserRoutes = require("./routes/AdminUserRoutes")
const FaqRoutes = require("./routes/FaqRoutes");

dotenv.config();
app.use(express.json());
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
