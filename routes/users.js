const router = require('express').Router();
const fs = require('fs').promises;
const path = require('path');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const users = path.join(__dirname, '../data/users.json');
const User = require('../models/user');

router.post('/users', jsonParser, (req, res) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then((user) => res.send({ data: user }))
    .catch((err) => res.status(500).send({ message: 'Error: ' }));
});

router.get('/users', (req,res)=>{
  User.find({});
});

router.get('/users/:userId', (req, res)=>{
  User.findById(req.params.id)
  .then(user => res.send({data: user}))
  .catch(err =>{res.status(500).send({message: 'Error'})});
});

/* router.get('/users', (req, res) => {
  fs.readFile(users, 'utf8')
    .then((data) => {
      res.json(JSON.parse(data));
    })
    .catch(() => {
      res.status(500).send({ message: 'File not found.' });
    });
}); */

/*router.get('/users/:id', (req, res) => {
  fs.readFile(users, 'utf8')
    .then((data) => {
      const foundUser = JSON.parse(data).find((user) => user._id === req.params.id);
      if (!foundUser) {
        res.status(404).send({ message: 'User ID not found' });
      } else {
        res.send(foundUser);
      }
    })
    .catch(() => {
      res.status(500).send({ message: 'File not found' });
    });
});*/

module.exports = router;
