import { Square, PieceSymbol } from 'chess.js';

type MajorPiece = 'N' | 'B' | 'R' | 'Q' | 'K';
type CorrectPieceSymbol = Uppercase<Exclude<PieceSymbol, 'p'>> | 'p';
type PieceInMoveNotation = Uppercase<Exclude<PieceSymbol, 'p'>> | PawnNotation;
type PotentialMove = `${PieceInMoveNotation}${Square}`;
type PawnNotation = '';
type ThreatMap = { [k in Square]?: CorrectPieceSymbol[] };

export { MajorPiece, CorrectPieceSymbol, PieceInMoveNotation, PotentialMove, PawnNotation, ThreatMap, Square };
