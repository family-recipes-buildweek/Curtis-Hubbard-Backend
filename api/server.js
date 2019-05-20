const express = require("express")
const helmet = require("helmet")
const cors = require("cors")
const configureRoutes = require("../config/routes")
const { authenticate } = require("../auth/authenticate");

//const sourceRouter = require("../projects/sourceRouter")
//const categoryRouter = require("../projects/categoryRouter")
//const RecipeRouter = require("../projects/recipeRouter")
//const ingredientRouter = require("../projects/ingredientRouter")


const server = express()

server.use(express.json())
server.use(helmet())
server.use(cors())

//server.use("/api/source",sourceRouter)
//server.use("/api/category",authenticate,categoryRouter)
//server.use("/api/recipe",RecipeRouter)
//server.use("/api/ingredient",ingredientRouter)

server.get("/",(req,res)=>{
    res.status(200).json("server working")
})

configureRoutes(server);
module.exports = server