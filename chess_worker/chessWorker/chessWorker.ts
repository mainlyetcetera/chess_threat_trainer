import { Chess, Square, PieceSymbol } from 'chess.js';

type MajorPiece = 'N' | 'B' | 'R' | 'Q' | 'K';
type CorrectPieceSymbol = Uppercase<Exclude<PieceSymbol, 'p'>> | 'p';
type PieceInMoveNotation = Uppercase<Exclude<PieceSymbol, 'p'>> | PawnNotation;
type PotentialMove = `${PieceInMoveNotation}${Square}`;
type PawnNotation = '';
type ThreatMap = { [k in Square]?: CorrectPieceSymbol[] };

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
