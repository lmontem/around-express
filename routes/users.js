const router = require('express').Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const {getUsers, createUser, getUserById} = require('../controllers/usersControllers');

router.post('/users', jsonParser, createUser);

router.get('/users', getUsers);

router.get('/users/:userId', getUserById);

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
