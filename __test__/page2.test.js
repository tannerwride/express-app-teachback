const request = require('supertest');
const app = require('../app'); 
jest.setTimeout(300000);
describe("Test the root path", () => {
    test("page2 test", done => {
      request(app)
        .get("/page2.html")
        .then(response => {
          expect(response.statusCode).toBe(200);
          done();
        });
    });
  });

describe('Time test', () => {
  test('page 2 time', async () => {
      const foo = true;
      await new Promise((r) => setTimeout(r, 100000));
      expect(foo).toBeDefined();
    });
})

describe("Test the root path", () => {
  test("page2 test 1", done => {
    request(app)
      .get("/page2.html")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});

describe("Test the root path", () => {
  test("page2 test 2", done => {
    request(app)
      .get("/page2.html")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});

describe("Test the root path", () => {
  test("page2 test 3", done => {
    request(app)
      .get("/page2.html")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});