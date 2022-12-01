"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePortfolio = exports.createBlogs = exports.createProject = exports.createPortfolio = exports.getData = void 0;
const portfolio_schema_1 = __importDefault(require("./../../database/schemas/portfolio_schema"));
const mongoose_1 = require("mongoose");
const project_schema_1 = __importDefault(require("./../../database/schemas/project_schema"));
const blog_schema_1 = __importDefault(require("./../../database/schemas/blog_schema"));
const getData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { id } = req.params;
        if (!id)
            return res.status(400).json({ message: 'No id provided' });
        if (!(0, mongoose_1.isValidObjectId)(id))
            return res.status(400).json({ message: 'Invalid id provided' });
        const portfolio = yield portfolio_schema_1.default.findById({ _id: id }).populate('projects').populate('blogs');
        if (!portfolio)
            return res.status(400).json({ message: 'No portfolio found' });
        else
            return res.status(200).json(portfolio);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getData = getData;
const createPortfolio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let portfolio = yield portfolio_schema_1.default.create(req.body);
        res.status(201).send(portfolio);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.createPortfolio = createPortfolio;
const createProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { id } = req.params;
        if (!id)
            return res.status(400).json({ message: 'No id provided' });
        if (!(0, mongoose_1.isValidObjectId)(id))
            return res.status(400).json({ message: 'Invalid id provided' });
        let project = yield project_schema_1.default.create(req.body);
        let portfolio = yield portfolio_schema_1.default.findByIdAndUpdate({ _id: id }, { $push: { projects: project._id } }, { new: true });
        res.status(201).send(portfolio);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.createProject = createProject;
const createBlogs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { id } = req.params;
        if (!id)
            return res.status(400).json({ message: 'No id provided' });
        if (!(0, mongoose_1.isValidObjectId)(id))
            return res.status(400).json({ message: 'Invalid id provided' });
        let blog = yield blog_schema_1.default.create(req.body);
        let portfolio = yield portfolio_schema_1.default.findByIdAndUpdate({ _id: id }, { $push: { blogs: blog._id } }, { new: true });
        res.status(201).send(portfolio);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.createBlogs = createBlogs;
const updatePortfolio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { id } = req.params;
        if (!id)
            return res.status(400).json({ message: 'No id provided' });
        if (!(0, mongoose_1.isValidObjectId)(id))
            return res.status(400).json({ message: 'Invalid id provided' });
        let portfolio = yield portfolio_schema_1.default.findByIdAndUpdate({ _id: id }, req.body, { new: true }).populate('projects').populate('blogs');
        res.status(200).send(portfolio);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.updatePortfolio = updatePortfolio;
//# sourceMappingURL=main.services.js.map