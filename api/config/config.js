const dotenv = require('dotenv')
dotenv.config()
module.exports = {
  "development": {
    "username": process.env.USERDATABASE,
    "password": process.env.USERSENHA,
    "database": "escola_ingles",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
}