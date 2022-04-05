"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const handler_1 = __importDefault(require("./handler"));
//get blogs
router.get('/', handler_1.default.getAllBlogs);
router.get('/getBlog/:id', handler_1.default.getBlogById);
//post blogs
router.post('/createBlog', handler_1.default.createBlog);
router.post('/deleteBlog/:id', handler_1.default.deleteBlog);
//update blogs
router.patch('/updateBlog/:id', handler_1.default.updateBlog);
exports.default = router;
