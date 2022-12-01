import Portfolio from "./../../database/schemas/portfolio_schema";
import { Request, Response } from "express";
import { IPortfolio } from "./../../types/portfolio_types";
import { isValidObjectId } from "mongoose";
import Project from "./../../database/schemas/project_schema";
import Blog from "./../../database/schemas/blog_schema";

export const getData = async (req: Request, res: Response) => {
    try {
        let { id } = req.params;
        if (!id) return res.status(400).json({ message: 'No id provided' });
        if (!isValidObjectId(id)) return res.status(400).json({ message: 'Invalid id provided' });
        const portfolio: any = await Portfolio.findById({ _id: id }).populate('projects').populate('blogs');
        if (!portfolio) return res.status(400).json({ message: 'No portfolio found' });
        else return res.status(200).json(portfolio);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const createPortfolio = async (req: Request, res: Response) => {
    try {
        let portfolio: IPortfolio = await Portfolio.create(req.body);
        res.status(201).send(portfolio);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const createProject = async (req: Request, res: Response) => {
    try {
        let { id } = req.params;
        if (!id) return res.status(400).json({ message: 'No id provided' });
        if (!isValidObjectId(id)) return res.status(400).json({ message: 'Invalid id provided' });
        let project: any = await Project.create(req.body);
        let portfolio = await Portfolio.findByIdAndUpdate({ _id: id }, { $push: { projects: project._id } }, { new: true });
        res.status(201).send(portfolio);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const createBlogs = async (req: Request, res: Response) => {
    try {
        let { id } = req.params;
        if (!id) return res.status(400).json({ message: 'No id provided' });
        if (!isValidObjectId(id)) return res.status(400).json({ message: 'Invalid id provided' });
        let blog: any = await Blog.create(req.body);
        let portfolio = await Portfolio.findByIdAndUpdate({ _id: id }, { $push: { blogs: blog._id } }, { new: true });
        res.status(201).send(portfolio);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updatePortfolio = async (req: Request, res: Response) => {
    try {
        let { id } = req.params;
        if (!id) return res.status(400).json({ message: 'No id provided' });
        if (!isValidObjectId(id)) return res.status(400).json({ message: 'Invalid id provided' });
        let portfolio = await Portfolio.findByIdAndUpdate({ _id: id }, req.body, { new: true }).populate('projects').populate('blogs');
        res.status(200).send(portfolio);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
