
import Product from '../models/Product'
var express = require('express');
var router = express.Router();

router.get('/all', async function (req, res) {
    try {
        var data = await Product.find()
        res.send(data)
    } catch (error) {
        res.status(500).send(error);
    }
})

router.post('/filter', async function (req, res) {
    try {
        var data = await Product.find( { "category": req.body.category } )
        res.send(data)
    } catch (error) {
        res.status(500).send(error);
    }
})

router.post('/create', async function (req, res) {
    try {
        const newProduct = new Product(req.body)
        await newProduct.save()
        res.send(newProduct)
    } catch (error) {
        res.status(500).send(error);
    }
})

router.post('/delete', async function (req, res) {
    try {
        var data = await Product.deleteMany(req.body)
        res.send(data)
    } catch (error) {
        res.status(500).send(error);
    }
})

router.put('/update', async function (req, res) {
    try {
        var data = await Product.updateOne({ "_id": req.body._id }, req.body)
        res.send(data)
    } catch (error) {
        res.status(500).send(error);
    }
})

module.exports = router;