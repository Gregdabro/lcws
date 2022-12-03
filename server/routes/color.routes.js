const express = require("express")
const router = express.Router({ mergeParams: true })
const colorController = require("../controllers/colorController")

router.post("/", colorController.create)

router.get("/", colorController.getAll)

router.get("/:id", colorController.getOne)


module.exports = router
