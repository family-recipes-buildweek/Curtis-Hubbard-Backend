const request = require("supertest")
const server = require("./server")

describe("server.js",()=>{
    describe("GET /",()=>{
        it("should respond with 200 OK async with done", (done)=>{
            request(server)
                .get("/")
                .then(response=>{
                    expect(response.status).toBe(200)
                    done()
                })
        })
    })
})