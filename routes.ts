import express from 'express';
const router = express.Router();

import functions from "./handler";


//get blogs
router.get('/', functions.getAllBlogs);
router.get('/getBlog/:id', functions.getBlogById);

//post blogs
router.post('/createBlog', functions.createBlog);

//delete blogs
router.delete('/deleteBlog/:id', functions.deleteBlog);

//update blogs
router.patch('/updateBlog/:id', functions.updateBlog);

export default router;