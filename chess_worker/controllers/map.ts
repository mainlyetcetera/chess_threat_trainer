import { getNextMoveThreat } from '../chessWorker/chessWorker';
import { Request, Response } from 'express';

const getMap = (_: Request, res: Response) => res.send(getNextMoveThreat());

export { getMap };
