import { getNextMoveThreat } from '../chessWorker';

describe('the chess worker', () => {
    let w: any;

    beforeAll(() => {
        w = getNextMoveThreat;
    });

    it('exists', () => {
        expect(w).toBeTruthy();
    });

    describe('get next move threat', () => {
        it('gives a map of the threats possible for the next move', () => {
            expect(w()).toHaveProperty('a3', 2);
        });
    });
});
