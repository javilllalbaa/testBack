
import User from './../models/User'
var express = require('express');
var router = express.Router();

router.get('/all', async function (req, res) {
  var data = await User.find()
  res.send(data)
})

router.post('/create', async function (req, res) {
  const newUser = new User(req.body)
  await newUser.save()
  var data = newUser
  res.send(data)
})

router.post('/delete', async function (req, res) {
  var data = await User.deleteMany(req.body)
  res.send(data)
})

router.post('/login', async function (req, res) {
  try {
    var data = await User.find(req.body)
    var info = {
      "name": data[0].name,
      "username": data[0].username,
      "email": data[0].email,
    }
    res.json(info)
  } catch (error) {
    res.status(400).send(error);
  }

})

var init = async function () {
  var admin = {
    "name": "test_1",
    "username": "admin",
    "email": "test@test.com",
    "password": "8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918"
  }
  var customer = {
    "name": "test_2",
    "username": "customer",
    "email": "customer@customer.com",
    "password": "b6c45863875e34487ca3c155ed145efe12a74581e27befec5aa661b8ee8ca6dd"
  }
  var admin_ = await User.find({ "username": admin.username })
  var customer_ = await User.find({ "username": customer.username })
  if (admin_.length == 0) {
    const newUser = new User(admin)
    await newUser.save()
  }
  if (customer_.length == 0) {
    const newUser = new User(customer)
    await newUser.save()
  }
  console.log("init user")
}
init()

module.exports = router;