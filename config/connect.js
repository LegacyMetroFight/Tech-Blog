const Sequelize = require('sequelize');
require('dotenv').config();
let sequelize;
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);

} else {
  sequelize = new Sequelize(process.envDB_NAME, process.env.envDB_USER, process.env.DB_Pw, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });
}
module.exports = sequelize;