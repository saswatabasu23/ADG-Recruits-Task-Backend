"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = __importDefault(require("./model"));
function getAllBlogs(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const blogs = yield model_1.default.find();
            res.status(200).json(blogs);
        }
        catch (err) {
            res.status(500).send({
                success: false,
                message: "Error"
            });
        }
    });
}
function getBlogById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const blog = yield model_1.default.findById(req.params.id);
            res.status(200).json(blog);
        }
        catch (err) {
            res.status(500).send({
                success: false,
                message: "Error"
            });
        }
    });
}
function createBlog(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const title = req.body.title;
            const details = req.body.details;
            const newBlog = new model_1.default({
                title,
                details
            });
            const savedBlog = yield newBlog.save();
            console.log(savedBlog);
            res.status(200).json(savedBlog);
        }
        catch (err) {
            console.log(err);
            // res.status(500).send({
            //     success: false,
            //     message: "Error"
            // })
        }
    });
}
function updateBlog(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const title = req.body.title;
            const details = req.body.details;
            const blog = yield model_1.default.findByIdAndUpdate(req.params.id, {
                title,
                details
            });
            res.status(200).json(blog);
        }
        catch (err) {
            res.status(500).send({
                success: false,
                message: "Error"
            });
        }
    });
}
function deleteBlog(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const blog = yield model_1.default.findByIdAndDelete(req.params.id);
            res.status(200).send({
                success: true,
                message: "Blog deleted successfully"
            });
        }
        catch (err) {
            res.status(500).send({
                success: false,
                message: "Error"
            });
        }
    });
}
exports.default = {
    getAllBlogs,
    getBlogById,
    createBlog,
    updateBlog,
    deleteBlog
};
