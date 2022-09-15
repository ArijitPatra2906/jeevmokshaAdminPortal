const router = require("express").Router();

const Blog = require("../models/BlogModel");


//Create new post
router.post("/", async (req, res) => {
    const newBlog = new Blog(req.body);
    try {
        const savedBlog = await newBlog.save();
        res.status(200).json(newBlog);
    } catch (err) {
        res.status(500).json(err);
    }
});

//Update post
router.put("/:id", async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (blog.username === req.body.username) {
            try {
                const updatedPost = await Blog.findByIdAndUpdate(
                    req.params.id,
                    {
                        $set: req.body,
                    },
                    { new: true }
                );
                res.status(200).json("Updated blog!");
            } catch (err) {
                res.status(500).json(err);
            }
        } else {
            res.status(401).json("You can update only your blog!");
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

//Delete post
router.delete("/:id", async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (blog.username === req.body.username) {
            try {
                await blog.delete();
                res.status(200).json("Blog has been deleted!");
            } catch (err) {
                res.status(500).json(err);
            }
        } else {
            res.status(401).json("You can delete only your blog!");
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

// Get post
router.get("/:id", async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);

        res.status(200).json(blog);
    } catch (err) {
        res.status(500).json(err);
    }
});

//Get all posts
router.get("/", async (req, res) => {
    try {
        const blogs = await Blog.find();

        res.status(200).json(blogs)

    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
