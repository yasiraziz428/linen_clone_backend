const router = require("express").Router();
const {
  createMessagesController,
  fetchAllMessagesController,
} = require("../controllers/message.controller");

router.post("/", createMessagesController);
router.get("/:room", fetchAllMessagesController);

module.exports = {
  message_router: router,
};
