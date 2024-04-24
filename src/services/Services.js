const dataSource = require('../models');

class Services {
  constructor(entityName) {
    this.model = entityName;
  }

  async get_all() {
    return dataSource[this.model].findAll();
  }

  async create(payload) {
    return dataSource[this.model].create(payload);
  }
}

module.exports = Services;