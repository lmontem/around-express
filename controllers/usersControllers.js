const { createCard } = require("../app")
const User = require('../models/user');

function getUsers(req, res){
  User.find({})
  .then(users => res.status(200).send({data: users}))
  .catch(err => res.status(500).send(err));
}

function createUser(req, res){
    const { name, about, avatar } = req.body;
    User.create({ name, about, avatar })
    .then((user) => res.send({ data: user }))
    .catch((err) => res.status(500).send({ message: 'Error' }));
}

function getUserById(req, res){
  console.log(req.params.userId);
  User.findById(req.params.userId)
    .then(user => res.status(200).send({data: user}))
  .catch(err =>{res.status(500).send({message: 'Error'})})
}
module.exports = {getUsers, createUser, getUserById};