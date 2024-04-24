class Services {
  constructor(entity) {
    this.model = entity;
  }

  async get_all() {
    return this.model.findAll();
  }

  async create(payload) {
    return this.model.create(payload);
  }
}

module.exports = Services;