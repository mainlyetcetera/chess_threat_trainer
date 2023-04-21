import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { Chess } from 'chess.js';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
const c = new Chess();

app.get('/', (_: Request, res: Response) => {
    console.log('what is here?', new Chess());

    res.send('Express + TypeScript Server');
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);

    // c.moves shows valid moves for this turn (so white's turn)
    console.log(c.moves());
});
