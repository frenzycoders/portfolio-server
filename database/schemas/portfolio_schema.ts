import { Model, model, Schema } from 'mongoose'
import { IPortfolio } from './../../types/portfolio_types'

const portfolioSchema: Schema<IPortfolio> = new Schema({
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
        type: Schema.Types.ObjectId,
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
        type: Schema.Types.ObjectId,
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

const Portfolio: Model<IPortfolio> = model('Portfolio', portfolioSchema);
export default Portfolio;