class Controller {
    constructor(entityService) {
      this.entityService = entityService;
    }
  
    async get(req, res) {
      try {
        const list_all = await this.entityService.get_all();
        return res.status(200).json(list_all);
      } catch (erro) {
        res.status(400).json({error: err.message})
      }
    }
  
    async post(req, res) {
      const payload = req.body;
      try {
        const create_new = await this.entityService.create(payload);
        return res.status(201).json(create_new);
      } catch (erro) {
        res.status(400).json({error: err.message})
      }
    }

}
  
module.exports = Controller;