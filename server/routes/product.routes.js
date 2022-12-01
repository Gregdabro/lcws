const express = require("express")
const router = express.Router({ mergeParams: true })
const productController = require("../controllers/productController")
const Product = require("../models/Product");

router.post("/", async (req, res) => {
    try {
        const { name, image, profession, qualities, rate, price, description, isFavorite } = req.body
        const product = await Product.create({ name, image, profession, qualities, rate, price, description, isFavorite })
        res.status(200).send(product)
    } catch (e) {
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже"
        })
    }
})
router.get("/",async(req, res) => {
    try {
        const list = await Product.find()
        res.status(200).send(list)
    } catch (e) {
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже"
        })
    }
})
router.get("/:id",async(req, res) => {
    try {
        const {id} = req.params
        const product = await Product.findOne({id})
        res.status(200).send(product)
    } catch (e) {
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже"
        })
    }
})

module.exports = router
