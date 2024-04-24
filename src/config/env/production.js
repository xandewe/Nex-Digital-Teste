require('dotenv/config');

class Config {
    constructor () {
      this.env = 'production'
      this.PORT = process.env.PORT || 8000
      this.API_BASE = '/api'
      this.DATABASE_HOST = process.env.DATABASE_HOST || 'localhost'
      this.DATABASE_PORT = 5432
      this.DATABASE = process.env.DATABASE
      this.DATABASE_USERNAME = process.env.DATABASE_USERNAME
      this.DATABASE_PASSWORD = process.env.DATABASE_PASSWORD
    }
  }
  
module.exports = new Config()