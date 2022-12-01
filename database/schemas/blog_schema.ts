import { Model, model, Schema } from 'mongoose'
import { IBlogs } from './../../types/blogs_types'

const blogSchema: Schema<IBlogs> = new Schema({
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


const Blog: Model<IBlogs> = model('Blog', blogSchema);
export default Blog;