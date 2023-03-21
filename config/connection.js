const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize = new Sequelize(
    'blog_db',
    'root',
    'root',
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );


module.exports = sequelize;
