import Blog from "../models/blog";

async function getAllBlogs(req, res) {
    try {
        const blogs = await Blog.find();
        res.status(200).json(blogs);
    } catch (err) {
        res.status(500).send({
            success: false,
            message: "Error"
        })
    }
}

async function getBlogById(req, res) {
    try {
        const blog = await Blog.findById(req.params.id);
        res.status(200).json(blog);
    } catch (err) {
        res.status(500).send({
            success: false,
            message: "Error"
        })
    }
}

async function createBlog(req, res) {
    try {
        const title = req.body.title;
        const details = req.body.details;
        const newBlog = new Blog({
            title,
            details
        });
        const savedBlog = await newBlog.save();
        res.status(200).json(savedBlog);
    } catch (err) {
        res.status(500).send({
            success: false,
            message: "Error"
        })
    }
}

async function updateBlog(req, res) {
    try {
        const title = req.body.title;
        const details = req.body.details;
        const blog = await Blog.findByIdAndUpdate(req.params.id, {
            title,
            details
        });
        res.status(200).json(blog);
    } catch (err) {
        res.status(500).send({
            success: false,
            message: "Error"
        })
    }
}

async function deleteBlog(req, res) {
    try {
        const blog = await Blog.findByIdAndDelete(req.params.id);
        res.status(200).send({
            success: true,
            message: "Blog deleted successfully"
        });
    } catch (err) {
        res.status(500).send({
            success: false,
            message: "Error"
        })
    }
}

module.exports = {
    getAllBlogs,
    getBlogById,
    createBlog,
    updateBlog,
    deleteBlog
};