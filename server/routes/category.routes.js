const express = require("express")
const Category = require("../models/Category")
const router = express.Router({ mergeParams: true })

router.get("/", async (req, res) => {
    try {
        const list = await Category.find()
        res.status(200).send(list)
    } catch (e) {
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже"
        })
    }
})

router.post("/", async (req, res) => {
    try {
        const {name} = req.body
        const category = await Category.create({name})
        res.status(200).send(category)
    } catch (e) {
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже"
        })
    }
})

module.exports = router
