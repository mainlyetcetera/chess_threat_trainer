import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { router as mapRoute } from './routes/map';
import cors from 'cors';
// import fetch from 'node-fetch';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(cors());

app.get('/', (_: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.use('/', mapRoute);

app.listen(port, async () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
    // console.log(await fetch('http://chess_worker:5000'));
});