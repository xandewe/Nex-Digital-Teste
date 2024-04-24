const Services = require('./Services.js');
const User = require('../models/user.js');

class UserServices extends Services {
    constructor () {
        super(User);
    }
}

module.exports = UserServices