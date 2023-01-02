const Sequelize = require("sequelize");
const dbConfig = require("../config/db.config.js");
const { messageSchema } = require("./message.model");

const linen_db_handler = new Sequelize(
  dbConfig.DB,
  dbConfig.USER,
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle,
    },
  }
);

const message_model = messageSchema(linen_db_handler);

module.exports = {
  db: linen_db_handler,
  message_model,
};
