const request = require('supertest');
const app = require('../app'); 
jest.setTimeout(300000);
describe("Test the root path", () => {
    test("page3 test", done => {
      request(app)
        .get("/page3.html")
        .then(response => {
          expect(response.statusCode).toBe(200);
          done();
        });
    });
  });

describe('Time test', () => {
  test('page 3 timed', async () => {
      const foo = true;
      await new Promise((r) => setTimeout(r, 100000));
      expect(foo).toBeDefined();
    });
})