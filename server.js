const app = require('./src/app')

const port = 8000

app.listen(port, () => {
    console.log(`App executing in http://localhost:${port}`)
})