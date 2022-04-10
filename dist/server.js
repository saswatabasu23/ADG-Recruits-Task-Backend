"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json({
    limit: '50mb'
}));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({
    extended: false,
    limit: '50mb'
}));
app.use((0, helmet_1.default)());
app.use((0, morgan_1.default)("dev"));
app.use((0, cors_1.default)());
app.use('/', routes_1.default);
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
    console.log(`Server is connected to port ${PORT}`);
});
const uri = process.env.MONGODB_URI;
mongoose_1.default.connect(uri)
    .then(() => console.log("Database is connected!"))
    .catch((err) => console.error(err));
