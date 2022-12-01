import { Router, IRouter } from 'express';
import { createBlogs, createPortfolio, createProject, getData, updatePortfolio } from './main.services';

const mainRoute: IRouter = Router();

mainRoute.get('/get-portfolio/:id', getData);
mainRoute.post('/create-portfolio', createPortfolio);
mainRoute.post('/create-project/:id', createProject);
mainRoute.post('/create-blog/:id', createBlogs);

mainRoute.patch('/update-portfolio/:id', updatePortfolio);

export default mainRoute;

