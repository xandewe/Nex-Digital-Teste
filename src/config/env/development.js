require('dotenv/config');

class Config {
    constructor () {
      this.env = 'development'
      this.PORT = process.env.PORT || 8000
      this.API_BASE = '/api'
      this.DATABASE_HOST = process.env.DATABASE_HOST || 'localhost'
      this.DATABASE_PORT = 5432
      this.DATABASE = process.env.DATABASE
      this.DATABASE_USERNAME = process.env.DATABASE_USERNAME
      this.DATABASE_PASSWORD = process.env.DATABASE_PASSWORD
      this.JWT_SECRET = process.env.JWT_SECRET
    }
  }
  
module.exports = new Config()