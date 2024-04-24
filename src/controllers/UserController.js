const Controller = require('./Controller.js');
const UserServices = require('../services/UserServices.js');
const bcrypt = require('bcrypt');

const saltRounds = 12;
const { hash } = bcrypt
const userServices = new UserServices();

class UserController extends Controller {
  constructor() {
    super(userServices);
  }

  async post(req, res) {
    const payload = req.body;
    try {
      const pass = payload.password

      const passhash = await hash(pass, saltRounds)
      payload.password = passhash
      const create_new = await this.entityService.create(payload);

      delete payload['password']

      return res.status(201).json({"id": create_new.id, ...payload});

    } catch (err) {
      res.status(400).json({error: err.message})
    }
  }

  async login(req, res) {
    const { email, password } = req.body;

    try {

      const { token, user} = await this.entityService.signin(email, password);
  
      return res.status(200).json({token: token, data: user});
  
    } catch (err) {
      res.status(401).json({error: err.message})
    }
  }
}

module.exports = UserController;