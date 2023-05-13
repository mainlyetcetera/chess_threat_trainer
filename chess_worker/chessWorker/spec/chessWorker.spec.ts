import { determinePiece, getNextMoveThreat } from '../chessWorker';

describe('the chess worker', () => {
    describe('determine piece', () => {
        let d: typeof determinePiece;

        beforeAll(() => {
            d = determinePiece;
        });

        it('exists', () => {
            expect(d).toBeTruthy();
        });

        it('determines a piece from a move', () => {
            expect(d('Na3')).toBe('N');
            expect(d('a3')).toBe('p');
        });

    });

    describe('get next move threat', () => {
        let w: typeof getNextMoveThreat;

        beforeAll(() => {
            w = getNextMoveThreat;
        });

        it('exists', () => {
            expect(w).toBeTruthy();
        });

        it('gives a map of the threats possible for the next move', () => {
            const actual = w();
            console.log({ actual });
            expect(actual).toHaveProperty('a3', ['p', 'N']);
        });
    });
});
