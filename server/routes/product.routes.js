const express = require("express")
const Product = require("../models/Product");
const router = express.Router({ mergeParams: true })


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

module.exports = router
