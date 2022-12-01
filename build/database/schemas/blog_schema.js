"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const blogSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    visit_url: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});
const Blog = (0, mongoose_1.model)('Blog', blogSchema);
exports.default = Blog;
//# sourceMappingURL=blog_schema.js.map