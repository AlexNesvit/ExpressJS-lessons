const request = require("supertest");

const app = require("../index.js");


describe("GET /api/movies", () => {

  it("should return all movies", async () => {

    const response = await request(app).get("/api/movies");


    expect(response.headers["content-type"]).toMatch(/json/);

    expect(response.status).toEqual(200);

  });

});