const express = require("express");
const router = express.Router();
const controller = require("./controller");
// const verifyUser = require("../authentication");

router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.get("/user/:id", controller.getAccountByUserId);
router.post("/", controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.remove);

module.exports = router;
