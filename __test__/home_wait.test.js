jest.setTimeout(50000);
describe('Time test', () => {
    test('Timed test #1', async () => {
        const foo = true;
        await new Promise((r) => setTimeout(r, 30000));
        expect(foo).toBeDefined();
      });
})