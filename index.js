require("dotenv").config();
import multerUploads from "./auth/multer"

const server = require("./api/server")
server.post("/upload",(req,res)=>{
  console.log("req.body: ",req.body)
})

const port = process.env.PORT || 6500;
server.listen(port, () => {
  console.log(`\n*** Server listening on port ${port} ***\n`);
});