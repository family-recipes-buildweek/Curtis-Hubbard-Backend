const express = require("express")
const helmet = require("helmet")
const cors = require("cors")
const configureRoutes = require("../config/routes")
const { authenticate } = require("../auth/authenticate");

const sourceRouter = require("../projectRoutes/sourceRoute")
const categoryRouter = require("../projectRoutes/categoryRoute")
const RecipeRouter = require("../projectRoutes/recipeRoute")
const ingredientRouter = require("../projectRoutes/ingredientRoute")


const server = express()

server.use(express.json())
server.use(helmet())
server.use(cors())

server.use("/api/source",sourceRouter)
server.use("/api/category",categoryRouter)
server.use("/api/recipe",RecipeRouter)
server.use("/api/ingredient",ingredientRouter)

server.get("/",(req,res)=>{
    res.status(200).json("server working")
})

configureRoutes(server);
module.exports = server