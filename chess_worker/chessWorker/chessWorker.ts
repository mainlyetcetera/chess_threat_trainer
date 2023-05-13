import { Chess } from 'chess.js';
import { MajorPiece, CorrectPieceSymbol, PotentialMove, ThreatMap, Square } from '../types/types';

const c = new Chess();

const determinePiece = (potentialMove: PotentialMove): CorrectPieceSymbol => {
    const mp: MajorPiece = potentialMove.slice(0, 1) as MajorPiece;
    const majorPieces: MajorPiece[] = ['N', 'B', 'R', 'Q', 'K'];
    return majorPieces.includes(mp) ? (mp as CorrectPieceSymbol) : 'p';
};

const getNextMoveThreat = (): ThreatMap =>
    c.moves().reduce((acc, curr) => {
        const s = curr.slice(-2) as Square;
        const p: CorrectPieceSymbol = determinePiece(curr as PotentialMove);
        !acc[s] ? acc[s] = [p] : acc[s]?.push(p);
        return acc;
    }, {} as ThreatMap);

export { determinePiece, getNextMoveThreat };
