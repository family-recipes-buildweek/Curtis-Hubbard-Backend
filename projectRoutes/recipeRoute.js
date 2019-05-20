const knex = require("knex")
const router = require("express").Router()
const knexConfig = require("../knexfile")
const db = knex(knexConfig.development);

router.get("/",(req,res)=>{
    db("recipe")
      .then(response=>{
        res.status(200).json(response)
      })
      .catch(err=>{
        res.status(500).json(err)
      })
})
router.get("/:id",(req,res)=>{
  const recipeID = req.params.id

  db("recipe")
    .where({id: recipeID})
    .first()
    .then(response=>{
      res.status(200).json(response)
    })
    .catch(err=>{
      res.status(500).json(err)
    })
})
//------------------------------------------------
router.get("/:id/ingredient",(req,res)=>{
db("recipe_ingredients")
  .where({ recipe_id: ingredient_id })
  .then(response=>{
      res.status(200).json(response)
  })
  .catch(err=>{
      res.status(500).json(err)
  })
})
//------------------------------------------------
router.post("/",(req,res)=>{
  const newRecipe = req.body;
  
  db("recipe")
  .insert(newRecipe)
  .then(ids=>{
      const id = ids[0]
      db("recipe")
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
db('recipe')
    .where({ id: req.params.id })
    .update(req.body)
    .then(count => {
    if (count > 0) {
        res.status(200).json({
        message: `${count} ${count > 1 ? 'recipes' : 'recipe'} updated`
        });
    } else {
        res.status(404).json({ message: 'recipe does not exist' });
    }
    })
    .catch(err => {
    res.status(500).json(err);
    });
});
router.delete("/:id",(req,res)=>{
    db("recipe")
    .where({id: req.params.id})
    .del()
    .then(count =>{
        if(count > 0) {
            res.status(200).json({message: `${count} ${count > 1 ? 'recipes' : 'recipe'} deleted`})
        }else {
            res.status(404).json({ message: 'recipe does not exist' });
            }
    })
    .catch(err => {
      res.status(500).json(err);
    });
})

module.exports = router;