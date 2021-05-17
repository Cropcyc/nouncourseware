const express = require('express')
const cors = require('cors')
const path = __dirname + '/app/views'
const app = express()

app.use(express.static(path))

let corsOptions = {
    origin: 'http://localhost:8081'
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

const db = require('./app/models')

db.sequelize.sync({ force: true}).then(() => {
    console.log('Drop and re-sync database')
})

// app.get('/', (req, res) => {
//     res.json({ greeting: 'This is the homepage route for unit testing.'})
// })

app.get('/', (req, res) => {
    res.sendFile(path + 'index.html')
})


require('./app/routes/course.routes') (app)

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Runnning server on port ${PORT}.`)
})


