const Product = require("../models/Product");
const ApiError = require("../error/ApiError")

class ProductController {
    async create(req, res, next) {
        try {
            const { name, image, category, colors, rate, price, description, isFavorite } = req.body
            const product = await Product.create({ name, image, category, colors, rate, price, description, isFavorite })
            res.status(200).send(product)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res, next) {
        try {
            // todo: реализовать поиск по параметру categoryId и colorsIds["1", "2", "3"]
            const productList = await Product.find()
            res.status(200).send(productList)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getOne(req, res, next) {
        try {
            const {id} = req.params
            const product = await Product.findById(({_id: id}))
            res.status(200).send(product)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

}

module.exports = new ProductController()