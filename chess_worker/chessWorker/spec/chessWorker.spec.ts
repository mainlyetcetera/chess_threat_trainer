import { getNextMoveThreat } from '../chessWorker';

describe('the chess worker', () => {
    let w: any;

    beforeAll(() => {
        w = getNextMoveThreat;
    });

    it('can run a test', () => {
        expect(true).toBe(true);
    });

    it('exists', () => {
        expect(w).toBeTruthy();
    });
});
