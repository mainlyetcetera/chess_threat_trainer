import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { router as mapRoute } from './routes/map';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get('/', (_: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.use('/', mapRoute);

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
