const dataSource = require('../models');

class Services {
  constructor(entityName) {
    this.model = entityName;
  }

  async getAll(page, limit) {
    // return dataSource[this.model].findAll();
    const options = {
      page: page || 1,
      paginate: limit || 2,
      order: [['id', 'ASC']]
    }
    return dataSource[this.model].paginate(options)
  }
  
  async getBy(object) {
    return dataSource[this.model].findOne({where: { object }});
  }

  async create(payload) {
    return dataSource[this.model].create(payload);
  }
}

module.exports = Services;