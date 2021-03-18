const router = require('express').Router();
const fs = require('fs').promises;
const path = require('path');

const users = path.join(__dirname, '../data/users.json');

router.get('/users', (req, res) => {
  fs.readFile(users, 'utf8')
    .then((data) => {
      res.json(JSON.parse(data));
    })
    .catch(() => {
      res.status(500).send({ message: 'File not found.' });
    });
});

router.get('/users/:id', (req, res) => {
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
});

module.exports = router;
