const knex = require("knex")
const router = require("express").Router()
const knexConfig = require("../knexfile")
const db = knex(knexConfig.development);

router.get("/",(req,res)=>{
    db("ingredient")
      .then(response=>{
        res.status(200).json(response)
      })
      .catch(err=>{
        res.status(500).json(err)
      })
})
router.get("/:id",(req,res)=>{
const ingredientID = req.params.id

db("ingredient")
    .where({id: ingredientID})
    .first()
    .then(response=>{
    res.status(200).json(response)
    })
    .catch(err=>{
    res.status(500).json(err)
    })
})
router.post("/",(req,res)=>{
const newIngredient = req.body;

db("ingredient")
.insert(newIngredient)
.then(ids=>{
    const id = ids[0]
    db("ingredient")
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
db('ingredient')
    .where({ id: req.params.id })
    .update(req.body)
    .then(count => {
    if (count > 0) {
        res.status(200).json({
        message: `${count} ${count > 1 ? 'ingredients' : 'ingredient'} updated`
        });
    } else {
        res.status(404).json({ message: 'ingredient does not exist' });
    }
    })
    .catch(err => {
    res.status(500).json(err);
    });
});
router.delete("/:id",(req,res)=>{
    db("ingredient")
    .where({id: req.params.id})
    .del()
    .then(count =>{
        if(count > 0) {
            res.status(200).json({message: `${count} ${count > 1 ? 'ingredients' : 'ingredient'} deleted`})
        }else {
            res.status(404).json({ message: 'ingredient does not exist' });
          }
    })
    .catch(err => {
        res.status(500).json(err);
      });
})

module.exports = router;