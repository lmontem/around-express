const express = require('express');
const user = require('./routes/users.js');
const card = require('./routes/cards.js');

const { PORT = 3000 } = process.env;
const app = express();

app.use('/users', user);
app.use('/cards', card);

app.get('/', (req, res)=>{
  res.status(404).send({ message: "Requested resource not found" });
});

app.listen(PORT, () => {
  // if everything works fine, the console will show which port the application is listening to
    console.log(`App listening at port ${PORT}`)
})