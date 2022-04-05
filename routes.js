import express from 'express';
const router = express.Router();

import getAllBlogs from "handler";
import getBlogById from "handler";
import createBlog from "handler";
import updateBlog from "handler";
import deleteBlog from "handler";

//get blogs
router.get('/', getAllBlogs);
router.get('/:id', getBlogById);

//post blogs
router.post('/createBlog', createBlog);
router.post('/deleteBlog/:id', deleteBlog);

//update blogs
router.patch('/updateBlog/:id', updateBlog);

export default router;