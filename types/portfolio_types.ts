import { ObjectId } from "mongoose";

export interface IPortfolio {
    name: string;
    github_url: string;
    linkedin_url: string;
    projects: ObjectId[];
    about: string;
    resume_link: string;
    blogs: ObjectId[];
    contact: IContact;
}

export interface IContact {
    name: string;
    email: string;
    message: string;
    number: string;
}