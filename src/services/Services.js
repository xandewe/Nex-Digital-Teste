const dataSource = require('../models');

class Services {
  constructor(entityName) {
    this.model = entityName;
  }

  async getAll() {
    return dataSource[this.model].findAll();
  }
  
  async getBy(object) {
    return dataSource[this.model].findOne({where: { object }});
  }

  async create(payload) {
    return dataSource[this.model].create(payload);
  }
}

module.exports = Services;