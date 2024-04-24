const Services = require('./Services.js');
const jwt = require('jsonwebtoken')
const config = require('../config')
const bcrypt = require('bcrypt');
const dataSource = require('../models');

const { compare } = bcrypt

class UserServices extends Services {
    constructor () {
        super('User');
    }

    genToken(user) {
        const token = jwt.sign({ id: user.id }, config.JWT_SECRET, { expiresIn: '1d' })
        return token
    }

    async signin(email, password) {
        const user = await dataSource[this.model].findOne({
            where: {
              email: email
            }
        });

        if(user === null){
            throw new Error('Login invalid')
        };

        const passIsValid = await compare(password, user.password);

        if (!passIsValid) {
            throw new Error('Login invalid')
        };

        const token = this.genToken(user);
        const { name } = user;
        return { token, data: { name, email }};
    }
}

module.exports = UserServices