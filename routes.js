import express from 'express';
const router = express.Router();

import Blog from "../models/blog";
import getAllBlogs from "../handlers/getAllBlogs";
import getBlogById from "../handlers/getBlogById";
import createBlog from "../handlers/createBlog";
import updateBlog from "../handlers/updateBlog";
import deleteBlog from "../handlers/deleteBlog";

//get blogs
router.get('/', getAllBlogs);
router.get('/:id', getBlogById);

//post blogs
router.post('/', createBlog);
router.post('/deleteBlog/:id', deleteBlog);

//update blogs
router.patch('/updateBlog/:id', updateBlog);

module.exports = router;