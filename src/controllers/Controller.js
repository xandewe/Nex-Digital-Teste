class Controller {
    constructor(entityService) {
      this.entityService = entityService;
    }
  
    async get(req, res) {
      const { page, limit } = req.query 
      
      try {
        const list_all = await this.entityService.getAll(page, limit);
        return res.status(200).json(list_all);
      } catch (erro) {
        res.status(400).json({error: erro.message})
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