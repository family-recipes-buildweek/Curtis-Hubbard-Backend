const express = require("express")
const helmet = require("helmet")
const cors = require("cors")
const configureRoutes = require("../config/routes")

const { authenticate } = require("../auth/authenticate")
const { urlencoded, json } = require("body-parser")
const { resolve } = require("path") 
const { uploader, cloudinaryConfig } = require("../config/cloudinaryConfig")
const { multerUploads, dataUri } = require("../auth/multer")

const sourceRouter = require("../projectRoutes/sourceRoute")
const categoryRouter = require("../projectRoutes/categoryRoute")
const RecipeRouter = require("../projectRoutes/recipeRoute")
const ingredientRouter = require("../projectRoutes/ingredientRoute")

const server = express()

server.use(express.json())
server.use(helmet())
server.use(cors({
    origin:'https://team-family-recipes.herokuapp.com',
    credentials:true
    }))
server.use(urlencoded({ extended: false }))
server.use(express.static(resolve(__dirname, 'src/public')))
server.use(urlencoded({ extended: false }))
server.use('*', cloudinaryConfig);

server.use("/api/source",sourceRouter)
server.use("/api/category",authenticate,categoryRouter)
server.use("/api/recipe",RecipeRouter)
server.use("/api/ingredient",ingredientRouter)

server.get("/",(req,res)=>{
    res.status(200).json("server working")
})
server.post('/upload', multerUploads, (req, res) => {
    if(req.file) {
        const file = dataUri(req).content;
        return uploader.upload(file)
    .then((result) => {
        const image = result.url;
        
        return res.status(200).json({
                messge: 'Your image has been uploded successfully to cloudinary',
                data: { image }
        })
    })
    .catch((err) => res.status(400).json({
                    messge: 'someting went wrong while processing your request',
                    data: { err}
        }))
    }
});

server.get("/api/ingredient",(req,res)=>{
    db("ingredient")
      .then(response=>{
        res.status(200).json(response)
      })
      .catch(err=>{
        res.status(500).json(err)
      })
})
configureRoutes(server);
module.exports = server