const { DataTypes } = require("sequelize"); // Import the built-in data types

const messageSchema = (database_object) => {
  const schema = database_object.define("message", {
    sender: {
      type: DataTypes.STRING(48),
    },
    message: {
      type: DataTypes.STRING(1000),
    },
    room: {
      type: DataTypes.STRING(48),
    },
    time: {
      type: DataTypes.STRING(48),
    },
  });

  return schema;
};

module.exports = {
  messageSchema,
};
