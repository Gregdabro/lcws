const Category = require("../models/Category");
const ApiError = require("../error/ApiError")

class CategoryController {
    async create(req, res, next) {
        try {
            const { name } = req.body
            const category = await Category.create({ name })
            res.status(200).send(category)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res, next) {
        try {
            const categoryList = await Category.find()
            res.status(200).send(categoryList)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getOne(req, res, next) {
        try {
            const {id} = req.params
            const category = await Category.findById(({_id: id}))
            res.status(200).send(category)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

}

module.exports = new CategoryController()