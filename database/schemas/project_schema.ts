import { model, Model, Schema } from "mongoose";
import { IProject } from "./../../types/project_types";

const projectSchema: Schema<IProject> = new Schema({
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

const Project: Model<IProject> = model('Project', projectSchema);
export default Project;