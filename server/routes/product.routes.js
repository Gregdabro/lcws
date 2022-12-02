const express = require("express")
const router = express.Router({ mergeParams: true })
const productController = require("../controllers/productController")
const Product = require("../models/Product");

router.post("/", productController.create)
router.get("/",productController.getAll)
router.get("/:id",productController.getOne)

module.exports = router
