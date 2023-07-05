jest.setTimeout(50000);
describe('Time test', () => {
    test('Timed test #4', async () => {
        const foo = true;
        await new Promise((r) => setTimeout(r, 40000));
        expect(foo).toBeDefined();
      });
})