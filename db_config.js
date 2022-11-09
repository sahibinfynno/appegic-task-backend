const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("test", "root", "root123", {
  host: "localhost",
  dialect: "mysql",
  sync: true,
  logging: false,
});

module.exports = { sequelize };
