const { message_model } = require("../models");

const createMessagesController = (req, res) => {
  // Create a Message
  const new_message = req.body;

  // Save Message in the database
  message_model
    .create(new_message)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while insert a new message.",
      });
    });
};

const fetchAllMessagesController = (req, res) => {
  const room = req.params.room;
  const condition = room ? { room: room } : null;

  message_model
    .findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving messages.",
      });
    });
};

module.exports = {
  createMessagesController,
  fetchAllMessagesController,
};
