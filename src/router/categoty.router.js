
import Category from '../models/Category'
var express = require('express');
var router = express.Router();

router.get('/all', async function (req, res) {
    var data = await Category.find()
    res.json(data)
})

router.post('/create', async function (req, res) {
    const newCategory = new Category(req.body)
    await newCategory.save()
    res.send(newCategory)
})

router.post('/delete', async function (req, res) {
    var data = await Category.deleteMany(req.body)
    res.send(data)
})

router.put('/update', async function (req, res) {
    var data = await Category.updateOne( { "_id": req.body._id }, req.body )
    res.send(data)
})

module.exports = router;