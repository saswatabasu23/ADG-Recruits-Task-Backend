import express from 'express';
const router = express.Router();

import functions from "./handler";



//get blogs
router.get('/', functions.getAllBlogs);
router.get('/:id', functions.getBlogById);

//post blogs
router.post('/createBlog', functions.createBlog);
router.post('/deleteBlog/:id', functions.deleteBlog);

//update blogs
router.patch('/updateBlog/:id', functions.updateBlog);

export default router;