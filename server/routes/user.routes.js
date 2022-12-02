const express = require("express")
const router = express.Router({ mergeParams: true })
const userController = require("../controllers/userController")

router.get("/registration", userController.registration)
router.get("/login", userController.login)

router.get("/auth", userController.check)

module.exports = router
