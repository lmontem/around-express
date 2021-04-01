const Card = require('../models/card');

function getCards(req, res){
  Card.find({})
  .then(card =>{res.status(200).send({data: card})})
  .catch(err =>{
    if (err.name === "ValidatorError") { return res.status(400).send(err) }
    else if (err.name === "CastError") { return res.status(404).send(err) }
    else { return res.status(500).send(err) }
  })

}

function createCard(req, res){
   const { name, link } = req.body;
  Card.create({ name, link, owner: req.user._id })
    .then((card) => res.send({ data: card }))
    .catch((err) => {
      if (err.name === "ValidatorError") { return res.status(400).send(err) }
      else if (err.name === "CastError") { return res.status(404).send(err) }
      else { return res.status(500).send(err) }
    });
}

function deleteCard(req, res){
  Card.findByIdAndRemove(req.params.cardId)
    .then(card => res.send({ message: 'card deleted' }))
    .catch(err => res.status(500).send({ message: 'Error' }));
}

module.exports = {getCards, createCard, deleteCard}