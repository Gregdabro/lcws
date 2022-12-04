const express = require("express")
const router = express.Router({ mergeParams: true })
const productController = require("../controllers/productController")
const authMiddleware = require("../middleware/authMiddleware")

router.post("/", productController.create)
router.patch("/:productId", productController.update)
router.get("/", authMiddleware, productController.getAll)
router.get("/:id",productController.getOne)

module.exports = router
