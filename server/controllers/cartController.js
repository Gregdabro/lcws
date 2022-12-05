const Cart = require("../models/Cart")
const ApiError = require("../error/ApiError")

// todo: реализовать CartController!

class CartController {
    async create(req, res, next) {
        try {

        } catch (e) {
            next(ApiError.badRequestError(e.message))
        }
    }

    async update(req, res, next) {
        try {

        } catch (e) {
            next(ApiError.badRequestError(e.message))
        }
    }

    async remove(req, res, next) {
        try {

        } catch (e) {
            next(ApiError.badRequestError(e.message))
        }
    }

    async getAll(req, res, next) {
        try {

        } catch (e) {
            next(ApiError.badRequestError(e.message))
        }
    }

    async getOne(req, res, next) {
        try {

        } catch (e) {
            next(ApiError.badRequestError(e.message))
        }
    }

}

module.exports = new CartController()