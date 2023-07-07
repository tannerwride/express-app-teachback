const request = require('supertest');
const app = require('../app'); 

describe("Test the root path", () => {
    test("home status response check", done => {
      request(app)
        .get("/")
        .then(response => {
          expect(response.statusCode).toBe(200);
          done();
        });
    });
  });

  describe('Time test', () => {
    test('Home time', async () => {
        const foo = true;
        await new Promise((r) => setTimeout(r, 100000));
        expect(foo).toBeDefined();
      });
})