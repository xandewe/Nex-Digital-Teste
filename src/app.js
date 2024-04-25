const express = require('express')
const config = require('./config')
const routes = require('./routes')
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const cors = require('cors')

const options = {
    swaggerDefinition: {
      openapi: "3.0.0",
      info: {
        title: "Test Nex Digtal (API)",
        version: "1.0.0",
        description: "This project is an API to help a supermarket promote its products more efficiently using technology",
        contact: {
          name: "Alexandre",
          email: "alexandrealvescs@gmail.com",
        },
      },
      servers: [
        {
          url: `http://localhost:${config.PORT}`,
        },
      ],
    },
    apis: ['./routes/*.js']
  };

const specs = swaggerJSDoc(options);

const app = express()

const corsOptions = {
  origin: 'http://localhost'
};

app.use(cors(corsOptions))
app.use(express.json())

app.get("/api/check", (req, res) => {
    res.json({success: true}), 200
})

app.use(config.API_BASE, routes)
app.use('/docs', swaggerUi.serve);
app.get('/docs', swaggerUi.setup(specs));

module.exports = app