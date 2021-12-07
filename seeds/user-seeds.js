const bcrypt = require('bcrypt');
const password = "12345"
const hash = bcrypt.hashSync(password, 10);


const {
  User
} = require('../models');

const userData = [{
    username: 'Steve',
    email: 'Steve@gmail.com',
    password: hash,
  },
  {
    username: 'Kris',
    email: 'Kris@gmail.com',
    password: hash,
  },
  {
    username: 'Sam',
    email: 'Sam@gmail.com',
    password: hash,
  },
  {
    username: 'Sean',
    email: 'Sean@gmail.com',
    password: hash,
  },
  {
    username: 'George',
    email: 'George@gmail.com',
    password: hash,
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
