const knex = require("knex")
const router = require("express").Router()
const knexConfig = require("../knexfile")
const db = knex(knexConfig.development);

router.get("/",(req,res)=>{
  db("source")
    .then(response=>{
      res.status(200).json(response)
    })
    .catch(err=>{
      res.status(500).json(err)
    })
})
router.get("/:id",(req,res)=>{
  const sourceID = req.params.id

  db("source")
    .where({id: sourceID})
    .first()
    .then(response=>{
      res.status(200).json(response)
    })
    .catch(err=>{
      res.status(500).json(err)
    })
})
router.post("/",(req,res)=>{
  const newSource = req.body;

  db("source")
  .insert(newSource)
  .then(ids=>{
    const id = ids[0]
    db("source")
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
  db('source')
      .where({ id: req.params.id })
      .update(req.body)
      .then(count => {
      if (count > 0) {
          res.status(200).json({
          message: `${count} ${count > 1 ? 'sources' : 'source'} updated`
          });
      } else {
          res.status(404).json({ message: 'source does not exist' });
      }
      })
      .catch(err => {
      res.status(500).json(err);
      });
});
router.delete("/:id",(req,res)=>{
  db("source")
  .where({id: req.params.id})
  .del()
  .then(count =>{
      if(count > 0) {
          res.status(200).json({message: `${count} ${count > 1 ? 'sources' : 'source'} deleted`})
      }else {
          res.status(404).json({ message: 'source does not exist' });
          }
  })
  .catch(err => {
    res.status(500).json(err);
  });
})
module.exports = router;