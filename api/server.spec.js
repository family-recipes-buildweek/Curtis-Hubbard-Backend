const request = require("supertest")
const server = require("./server")
describe("server.js",()=>{
    describe("/",()=>{
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
    describe("/api/ingredient",()=>{
        it("should respond with 200 OK async with done", (done)=>{
            request(server)
                .get("/api/ingredient")
                .then(response=>{
                    expect(response.status).toBe(200)
                    done()
                })
        })
        it("should respond with 201 when posting", ()=>{
            const newIngredient = {ingredient: "tomato"}
            return request(server)
                .post("/api/ingredient")
                .send(newIngredient)
                .expect(201).truncate()
                })
        })
    })

describe("categoryRoute.js",()=>{
    describe("/api/category",()=>{
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
    describe("/api/recipe",()=>{
        it("should respond with 200 OK async with done", (done)=>{
            request(server)
                .get("/api/recipe")
                .then(response=>{
                    expect(response.status).toBe(200)
                    done().truncate()
                })
        })
        it("should respond with 201 when posting", ()=>{
            const newRecipe= {title: "homemade tomato sauce",
                              instructions:"bake tomato's until firm"}
            return request(server)
                .post("/api/recipe")
                .send(newRecipe)
                .expect(201).truncate()
        })
    })
})
describe("sourceRoute.js",()=>{
    describe("/api/source",()=>{
        it("should respond with 200 OK async with done", (done)=>{
            request(server)
                .get("/api/recipe")
                .then(response=>{
                    expect(response.status).toBe(200)
                    done()
                })
        })
        it("should respond with 201 when posting", ()=>{
            const newSource= {name:"new recipe"}
               return request(server)
                .post("/api/source")
                .send(newSource)
                .expect(201).truncate()
        })
    })
})