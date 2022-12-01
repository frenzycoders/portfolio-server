"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const portfolioSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    github_url: {
        type: String,
        required: true
    },
    linkedin_url: {
        type: String,
        required: true
    },
    projects: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Project'
        }],
    about: {
        type: String,
        required: true
    },
    resume_link: {
        type: String,
        required: true
    },
    blogs: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Blog'
        }],
    contact: {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        message: {
            type: String,
            required: true
        },
        number: {
            type: String,
            required: true
        }
    }
}, {
    timestamps: true
});
const Portfolio = (0, mongoose_1.model)('Portfolio', portfolioSchema);
exports.default = Portfolio;
//# sourceMappingURL=portfolio_schema.js.map