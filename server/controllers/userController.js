const ApiError = require("../error/ApiError")
const bcrypt = require("bcryptjs")
const User = require("../models/User")
const tokenService = require("../services/token.service");

class UserController {
    async registration(req, res, next) {
        try {
            const { email, password, role } = req.body
            if (!email || !password) {
                return next(ApiError.badRequest("Некорректный email или password!"))
            }
            const existingUser = await User.findOne({ email })
            if (existingUser) {
                return next(ApiError.badRequest("Пользователь с таким email уже существует!"))
            }

            const hashPassword = await bcrypt.hash(password, 12)

            const newUser = await User.create({ email, role, password: hashPassword })
            // todo: создать корзину и передать id пользователя

            const tokens = tokenService.generate({ _id: newUser._id, role })
            await tokenService.save(newUser._id, tokens.refreshToken)

            res.status(201).send({ ...tokens, userId: newUser._id })
        } catch (e) {
            return next(ApiError.badRequest("Что то пошло нитак!"))
        }
    }

    async login(req, res) {

    }

    async check(req, res, next) {
        const {id} = req.query
        if (!id) {
            return next(ApiError.badRequest("Не задан ID"))
        }

        res.json(id)
    }
}

module.exports = new UserController()