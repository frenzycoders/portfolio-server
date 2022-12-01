import express, { Application } from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import { connectWithDab } from './database/connection';
import { Server, createServer } from 'node:http';

/* loading .env file using dotenv */
config({ path: './.env' });

/* getting databse connection url from .env file */
let url: string = process.env.DB_URL || 'mongodb://localhost:27017/monalis-server';

/* connecting to database */
connectWithDab(url);


/* creating express app */
const app: Application = express();
const server: Server = createServer(app);


/* setting up cors */
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

/* setting up express json */
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

/* setting up routes */
import main from './api/main/main.routes';
app.use('/api/main', main);



server.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
})