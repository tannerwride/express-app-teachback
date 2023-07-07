jest.setTimeout(300000);
describe('Time test', () => {
    test('Timed test #2', async () => {
        const foo = true;
        await new Promise((r) => setTimeout(r, 100000));
        expect(foo).toBeDefined();
      });
})