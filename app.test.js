const request = require("supertest");
const app = require("./app");


describe("Testing CoinMarketCap API route", () => {
    test("It should respond to the GET request", () => {
        return request(app)
            .get("/api/coins").then(res => {
                expect(res.statusCode).toBe(200);
            })
    }
    )
});