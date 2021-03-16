const users = require('../data/users.json');
const router = require('express').Router();

router.get('/users',(req,res)=>{
  res.json(users)
})

router.get('/users/:id',(req,res)=>{
  let foundUser = users.find((user) => user._id == req.params.id)
  if (!foundUser){
  res.status(404).send({ message: "User ID not found" })
}
else{
  res.send(foundUser)}
})


module.exports = router;