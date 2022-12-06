const express = require("express")
const router = express.Router({ mergeParams: true })
const categoryController = require("../controllers/categoryController")
const checkRoleMiddleware = require("../middleware/checkRoleMiddleware")
const authMiddleware = require("../middleware/authMiddleware")

router.post("/", checkRoleMiddleware("ADMIN"), categoryController.create)
router.delete("/:categoryId", checkRoleMiddleware("ADMIN"), categoryController.remove)

router.get("/", authMiddleware, categoryController.getAll)

router.get("/:id", categoryController.getOne)


module.exports = router
