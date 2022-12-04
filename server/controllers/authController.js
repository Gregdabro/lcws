
const ApiError = require("../error/ApiError")
const {validationResult} = require("express-validator");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const {generateUserData} = require("../utils/helpers");
const tokenService = require("../services/token.service");

class AuthController {
    async registration(req, res, next) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    error: {
                        message: "INVALID_DATA",
                        code: 400,
                        errors: errors.array()
                    }
                })
            }

            const {email, password} = req.body

            const existingUser = await User.findOne({ email })

            if (existingUser) {
                return res.status(400).json({
                    error: {
                        message: "EMAIL_EXIST",
                        code: 400
                    }
                })
            }

            const hashedPassword = await bcrypt.hash(password, 12)

            const newUser = await User.create({
                ...generateUserData(),
                ...req.body,
                password: hashedPassword
            })

            const tokens = await tokenService.generate({ _id: newUser._id })
            await tokenService.save(newUser._id, tokens.refreshToken)

            res.status(201).send({ ...tokens, userId: newUser._id })

        } catch (e) {
            next(ApiError.internal(e.message))
        }
    }

    async login(req, res, next) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    error: {
                        message: "INVALID_DATA",
                        code: 400,
                        errors: errors.array()
                    }
                })
            }

            const { email, password } = req.body

            const existingUser = await User.findOne({ email })

            if (!existingUser) {
                return res.status(400).send({
                    error: {
                        message: "EMAIL_NOT_FOUND",
                        code: 400,
                        errors: errors.array()
                    }
                })
            }

            const isPasswordEqual = await bcrypt.compare(password, existingUser.password)

            if (!isPasswordEqual) {
                return res.status(400).send({
                    error: {
                        message: "INVALID_PASSWORD",
                        code: 400,
                        errors: errors.array()
                    }
                })
            }

            const tokens = await tokenService.generate({ _id: existingUser._id })
            await tokenService.save(existingUser._id, tokens.refreshToken)

            res.status(200).send({ ...tokens, userId: existingUser._id })

        } catch (e) {
            next(ApiError.internal(e.message))
        }
    }

    async check(req, res, next) {
        try {
            const {refresh_token: refreshToken} = req.body
            const data = tokenService.validateRefresh(refreshToken)
            const dbToken = await tokenService.findToken(refreshToken)

            if (!data || !dbToken || data._id !== dbToken?.user?.toString()) {
                return res.status(401).json({ message: "Unauthorized"})
            }

            const tokens = await tokenService.generate({ _id: data._id })

            await tokenService.save(data._id, tokens.refreshToken)

            res.status(200).send({ ...tokens, userId: data._id })

        } catch (e) {
            next(ApiError.internal(e.message))
        }
    }

}

module.exports = new AuthController()