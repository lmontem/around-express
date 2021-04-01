const router = require('express').Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const {getCards, createCard, deleteCard} = require('../controllers/cardsControllers');


router.get('/cards', getCards);

router.post('/cards', jsonParser, createCard);

router.delete('/cards/:cardId', deleteCard);

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
