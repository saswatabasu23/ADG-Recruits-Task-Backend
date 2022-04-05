import { Request, Response } from "express";
import Blog from "./model";

async function getAllBlogs(req: Request, res: Response) {
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

async function getBlogById(req: Request, res: Response) {
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

async function createBlog(req: Request, res: Response) {
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
        console.log(err);
        // res.status(500).send({
        //     success: false,
        //     message: "Error"
        // })
    }
}

async function updateBlog(req: Request, res: Response) {
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

async function deleteBlog(req: Request, res: Response) {
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

export default {
    getAllBlogs,
    getBlogById,
    createBlog,
    updateBlog,
    deleteBlog
}