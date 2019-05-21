const knex = require("knex")
const router = require("express").Router()
const knexConfig = require("../knexfile")
const db = knex(knexConfig.development);
const { authenticate } = require("../auth/authenticate");


router.get("/",authenticate,(req,res)=>{
    db("category")
      .then(response=>{
        res.status(200).json(response)
      })
      .catch(err=>{
        res.status(500).json(err)
      })
})
router.get("/:id",(req,res)=>{
const categoryID = req.params.id

db("category")
    .where({id: categoryID})
    .first()
    .then(response=>{
    res.status(200).json(response)
    })
    .catch(err=>{
    res.status(500).json(err)
    })
})
//------------------------------------------------
router.get("/:id/recipe",(req,res)=>{
db("recipe")
    .where({ category_id: req.params.id })
    .then(response=>{
        res.status(200).json(response)
    })
    .catch(err=>{
        res.status(500).json(err)
    })
})
//------------------------------------------------
router.post("/",(req,res)=>{
const newCategory = req.body;

db("category")
.insert(newCategory)
.then(ids=>{
    const id = ids[0]
    db("category")
    .where({id})
    .first()
    .then(response=>{
        res.status(201).json(response)
    })
}).catch(err=>{
    res.status(500).json(err)
})
})
router.put('/:id', (req, res) => {
db('category')
    .where({ id: req.params.id })
    .update(req.body)
    .then(count => {
    if (count > 0) {
        res.status(200).json({
        message: `${count} ${count > 1 ? 'categories' : 'category'} updated`
        });
    } else {
        res.status(404).json({ message: 'category does not exist' });
    }
    })
    .catch(err => {
    res.status(500).json(err);
    });
});
router.delete("/:id",(req,res)=>{
    db("category")
    .where({id: req.params.id})
    .del()
    .then(count =>{
        if(count > 0) {
            res.status(200).json({message: `${count} ${count > 1 ? 'categories' : 'category'} deleted`})
        }else {
            res.status(404).json({ message: 'category does not exist' });
          }
    })
    .catch(err => {
        res.status(500).json(err);
      });
})
module.exports = router;