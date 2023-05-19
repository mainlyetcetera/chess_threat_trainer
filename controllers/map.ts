import fetch from 'node-fetch';
// const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
import { Request, Response } from 'express';

// doesn't this work with just the hostname to the chess worker?

const getMap = async (_: Request, res: Response) => {
    const r = await fetch('http://chess_worker:5000/map');
    const d = await r.json();
    res.send(d);
};

export { getMap };
