const express = require('express');
const router = express.Router();
const Person = require('./models/Person');

// Routes pour les opérations CRUD ici
router.post('/add', (req, res) => {
  const { name, age, favoriteFoods } = req.body;
  const newPerson = new Person({ name, age, favoriteFoods });
  newPerson.save()
    .then(data => res.json(data))
    .catch(err => res.status(400).json(err));
});

// Plus de routes pour find, update, delete, etc.

Person.find({ name: "John Doe" }, (error, data) => {
    if (error) console.error(error);
    console.log(data);
  });

  Person.findOne({ favoriteFoods: { $in: ["pizza"] } }, (error, data) => {
    if (error) console.error(error);
    console.log(data);
  });

  Person.findById(personId, (error, data) => {
    if (error) console.error(error);
    console.log(data);
  });
  
  Person.findById(personId, (error, person) => {
    if (error) console.error(error);
    person.favoriteFoods.push("hamburger");
    person.save();
  });
  
  Person.findOneAndUpdate({ name: "John Doe" }, { age: 20 }, { new: true }, (error, data) => {
    if (error) console.error(error);
    console.log(data);
  });

  Person.findByIdAndRemove(personId, (error, data) => {
    if (error) console.error(error);
    console.log(data);
  });
  
  Person.remove({ name: "Mary" }, (error, result) => {
    if (error) console.error(error);
    console.log(result);
  });

  Person.find({ favoriteFoods: { $in: ["burritos"] } })
  .sort({ name: 1 })
  .limit(2)
  .select({ age: 0 })
  .exec((error, data) => {
    if (error) console.error(error);
    console.log(data);
  });

  
  
  

module.exports = router;
