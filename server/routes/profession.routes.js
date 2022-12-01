const express = require("express")
const Profession = require("../models/Profession")
const router = express.Router({ mergeParams: true })

router.get("/", async (req, res) => {
    try {
        const list = await Profession.find()
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
        const profession = await Profession.create({name})
        res.status(200).send(profession)
    } catch (e) {
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже"
        })
    }
})

module.exports = router
