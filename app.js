const express = require('express');

const mongoose = require('mongoose');
const user = require('./routes/users.js');
const card = require('./routes/cards.js');

const { PORT = 3000 } = process.env;
const app = express();
mongoose.connect('mongodb://localhost:27017/aroundb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,

});

app.use((req, res, next) => {
  req.user = {
    owner: '6065e2dd6d32f422804c91a4' // paste the _id of the test user created in the previous step
  };

  next();
});

app.use(user);
app.use(card);

app.get('*', (req, res) => {
  res.status(404).send({ message: 'Requested resource not found' });
});

app.listen(PORT, () => {
  // if everything works fine, the console will show which port the application is listening to
  console.log(`App listening at port ${PORT}`);
});

module.exports.createCard = (req, res) => {
  console.log(req.user.owner); // _id will become accessible
};