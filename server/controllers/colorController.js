const Color = require("../models/Color");
const ApiError = require("../error/ApiError")

class ColorController {
    async create(req, res, next) {
        try {
            const { name } = req.body
            const color = await Color.create({ name })
            res.status(200).send(color)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res, next) {
        try {
            const colorList = await Color.find()
            res.status(200).send(colorList)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getOne(req, res, next) {
        try {
            const {id} = req.params
            const color = await Color.findById(({_id: id}))
            res.status(200).send(color)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

}

module.exports = new ColorController()