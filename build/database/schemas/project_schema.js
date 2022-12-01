"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const projectSchema = new mongoose_1.Schema({
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
    github_url: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});
const Project = (0, mongoose_1.model)('Project', projectSchema);
exports.default = Project;
//# sourceMappingURL=project_schema.js.map