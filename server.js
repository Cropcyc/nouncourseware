const express = require('express')
const cors = require('cors')
const path = __dirname + '/app/views'
const app = express()

app.use(express.static(path))

let corsOptions = {
    origin: 'https://fierce-inlet-25199.herokuapp.com/'
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

const db = require('./app/models')

db.sequelize.sync()

// app.get('/', (req, res) => {
//     res.json({ greeting: 'This is the homepage route for unit testing.'})
// })

require('./app/routes/course.routes') (app)

app.get('/', (req, res) => {
    res.sendFile(path + 'index.html')
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Runnning server on port ${PORT}.`)
})


