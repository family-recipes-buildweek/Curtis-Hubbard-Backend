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
describe("ingredientRoute.js",()=>{
    describe("GET /api/ingredient",()=>{
        it("should respond with 200 OK async with done", (done)=>{
            request(server)
                .get("/api/ingredient")
                .then(response=>{
                    expect(response.status).toBe(200)
                    done()
                })
        })
    })
    describe("POST /api/ingredient",()=>{
        it("should respond with 201 when posting", ()=>{
            const newIngredient = {ingredient: "tomato"}
            return request(server)
                .post("/api/ingredient")
                .send(newIngredient)
                .expect(201)
                })
        })
    })
describe("categoryRoute.js",()=>{
    describe("GET /api/category",()=>{
        it("should respond with 200 OK async with done", (done)=>{
            request(server)
                .get("/api/category")
                .then(response=>{
                    expect(response.status).not.toBe(200)
                    done()
                })
        })
    })
})
describe("recipeRoute.js",()=>{
    describe("GET /",()=>{
        it("should respond with 200 OK async with done", (done)=>{
            request(server)
                .get("/api/recipe")
                .then(response=>{
                    expect(response.status).toBe(200)
                    done()
                })
        })
    })
})
describe("sourceRoute.js",()=>{
    describe("GET /",()=>{
        it("should respond with 200 OK async with done", (done)=>{
            request(server)
                .get("/api/recipe")
                .then(response=>{
                    expect(response.status).toBe(200)
                    done()
                })
        })
    })
})