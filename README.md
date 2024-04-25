# INTRO

This project is an API to help a supermarket promote its products more efficiently using technology

## RUNNING PROJECT
```
npm start
or
nodemon server.js
or
node server.js
```

When running the project it will use the CREATE IF NOT EXISTS command and will create the model in the DB automatically

## CORS
API enabled to run only on localhost on port 3000

## Rotas

| Rota              | Método |
|-------------------|--------|
| /api/users        | POST   |
| /api/users/login  | POST   |
| /api/products     | POST   |
| /api/products     | GET    |


## TECH

- Node
- Express
- Sequelize
- postgresql
- nodemon
- bcrypt
- jsonwebtoken
- sequelize-cli
- dotenv
- sequelize-paginate