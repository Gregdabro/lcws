const express = require("express")
const router = express.Router({ mergeParams: true })
const authMiddleware = require("../middleware/authMiddleware")
const cartController = require("../controllers/cartController")


router.post("/", authMiddleware, cartController.create);

router.put("/:id", authMiddleware, cartController.update);

router.delete("/:id", authMiddleware, cartController.remove);

router.get("/find/:userId", authMiddleware, cartController.getAll);

module.exports = router;
