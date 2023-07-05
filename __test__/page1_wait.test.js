jest.setTimeout(30000);
describe('Time test', () => {
    test('Timed test #2', async () => {
        const foo = true;
        await new Promise((r) => setTimeout(r, 10000));
        expect(foo).toBeDefined();
      });
})