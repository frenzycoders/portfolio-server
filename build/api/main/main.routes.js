"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const main_services_1 = require("./main.services");
const mainRoute = (0, express_1.Router)();
mainRoute.get('/get-portfolio/:id', main_services_1.getData);
mainRoute.post('/create-portfolio', main_services_1.createPortfolio);
mainRoute.post('/create-project/:id', main_services_1.createProject);
mainRoute.post('/create-blog/:id', main_services_1.createBlogs);
mainRoute.patch('/update-portfolio/:id', main_services_1.updatePortfolio);
exports.default = mainRoute;
//# sourceMappingURL=main.routes.js.map