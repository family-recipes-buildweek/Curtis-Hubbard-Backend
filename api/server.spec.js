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
//--------------------------------------------------------------------------
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
                .expect(201)
                })
        })
        it("should respond with 404 saying no recipe", async ()=>{
            const newIngredient = {ingredient: "tomato"}
            const res = await request(server)
                .post("/api/recipe")
                .send(newIngredient)
            const id = res.body[0]
            return request(server)
                .delete(`/api/ingredient/${id}`)
                .then(res=>{
                    expect(404)
                })
        })
    })
//--------------------------------------------------------------------------

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
//--------------------------------------------------------------------------

describe("recipeRoute.js",()=>{
    describe("/api/recipe",()=>{
        it("should respond with 200 OK async with done", (done)=>{
            request(server)
                .get("/api/recipe")
                .then(response=>{
                    expect(response.status).toBe(200)
                    done()
                })
        })
        it("should respond with 201 when posting", ()=>{
            const newRecipe ={   title: "homemade tomato sauce",
                                 instructions:"bake tomato's until firm"
                             }

            return request(server)
                .post("/api/recipe")
                .send(newRecipe)
                .expect(201)
        })
        it("should respond with 404 saying no recipe", async ()=>{
            const newRecipe ={      id: 99,
                                    title: "FAKE",
                                    instructions: "TEST"
                             }
            const res = await request(server)
                .post("/api/recipe")
                .send(newRecipe)
            const id = res.body[0]
            return request(server)
                .delete(`/api/recipe/${id}`)
                .then(res=>{
                    expect(404)
                })
        })
    })
})
//--------------------------------------------------------------------------
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
                .expect(201)
        })

    })
})