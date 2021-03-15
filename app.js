const express = require ('express');
const { PORT = 3000 } = process.env;
const app = express();
const users = require('./data/users.json');
const cards = require('./data/cards.json');
app.listen(PORT, () => {
  // if everything works fine, the console will show which port the application is listening to
    console.log(`App listening at port ${PORT}`)
})

app.get('/users',(req,res)=>{
  res.json(users)
})

app.get('/cards',(req,res)=>{
  res.json(cards)
})

app.get('/', (req, res)=>{
  res.status(404).send({ message: "Requested resource not found" });
});