const { Category } = require("../models/Category")
const ApiError = require("../error/ApiError")

class CategoryController {
    async create(req, res) {
        const { name } = req.body
        const category = await Category.create({name})
        return res.json(category)
    }

    async get(req, res) {

    }

}

module.exports = new CategoryController()