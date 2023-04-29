// import { getNextMoveThreat } from '../chessWorker/chessWorker';
// import { ThreatMap } from '../types/types';

import { Request, Response } from 'express';

// function getMap(): ThreatMap { 
//     return getNextMoveThreat();
// }

const getMap = (_: Request, res: Response) => { 
    console.log('still calling get map');
    res.send('hitting get map');
    // res.json();
}

export { getMap };
