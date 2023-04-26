describe('life, the universe, and everything...', () => {
    it('should, at least, be able to run a test', () => {
        expect(true).toBe(true);
    });

    it('should recognize types', () => {
        const a: { foo: 'bar' } = { foo: 'bar' };
        expect(a).toHaveProperty('foo', 'bar');
    });
});
