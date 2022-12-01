"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = require("dotenv");
const connection_1 = require("./database/connection");
const node_http_1 = require("node:http");
(0, dotenv_1.config)({ path: './.env' });
let url = process.env.DB_URL || 'mongodb://localhost:27017/monalis-server';
(0, connection_1.connectWithDab)(url);
const app = (0, express_1.default)();
const server = (0, node_http_1.createServer)(app);
app.use((0, cors_1.default)({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
const main_routes_1 = __importDefault(require("./api/main/main.routes"));
app.use('/api/main', main_routes_1.default);
server.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});
//# sourceMappingURL=server.js.map