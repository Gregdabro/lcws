const express = require("express")
const router = express.Router({ mergeParams: true })
const categoryController = require("../controllers/categoryController")

router.post("/", categoryController.create)

router.get("/", categoryController.getAll)

router.get("/:id", categoryController.getOne)


module.exports = router
