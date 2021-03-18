const router = require('express').Router();
const fs = require('fs').promises;
const path = require('path');

const cards = path.join(__dirname, '../data/cards.json');

router.get('/cards', (req, res) => {
  fs.readFile(cards, 'utf8')
    .then((data) => {
      res.json(JSON.parse(data));
    })
    .catch(() => {
      res.status(500).send({ message: 'File not found' });
    });
});

module.exports = router;
