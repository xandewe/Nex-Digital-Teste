class Controller {
    constructor(entityService) {
      this.entityService = entityService;
    }
  
    async get(req, res) {
      try {
        const list_all = await this.entityService.pegaTodosOsRegistros();
        return res.status(200).json(list_all);
      } catch (erro) {
        // erro
      }
    }
  
    async post(req, res) {
      const payload = req.body;
      try {
        const create_new = await this.entityService.criaRegistro(payload);
        return res.status(201).json(create_new);
      } catch (erro) {
        // erro
      }
    }

}
  
module.exports = Controller;