const router = require('express').Router();
const fs = require('fs').promises;
const path = require('path');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const Card = require('../models/card');
const cards = path.join(__dirname, '../data/cards.json');

router.get('/cards', (req,res)=>{
  Card.find({});
});

router.post('/cards', jsonParser, (req, res)=>{
  const { owner } = req.user;
  const { name, link } = req.body;
  Card.create({ name, link, owner })
    .then((card) => res.send({ data: card }))
    .catch((err) => res.status(500).send({err}));
})

router.delete('/cards/:cardId', (req, res)=>{
  Card.findByIdAndRemove(req.params.id)
  .then(card => res.send({data: card}))
  .catch(err => res.status(500).send({message: 'Error'}));
})

/*router.get('/cards', (req, res) => {
  fs.readFile(cards, 'utf8')
    .then((data) => {
      res.json(JSON.parse(data));
    })
    .catch(() => {
      res.status(500).send({ message: 'File not found' });
    });
});*/

module.exports = router;
