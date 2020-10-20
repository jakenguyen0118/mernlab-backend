require('dotenv').config()
const { PORT = 4000, NODE_ENV = "development" } = process.env
const mongoose = require('./db/connection')

const cors = require('cors')
const corsOptions = require('./configs/cors')

const express = require('express')
const app = express()

const morgan = require('morgan')

// NODE_ENV === "production" ? app.use(cors(corsOptions)) : app.use(cors())
app.use(cors())
app.use(express.json())
app.use(morgan('tiny'))

app.get('/', (req, res) => {
    res.json({hello: 'Hello World'})
})

const playerRouter = require('./controllers/players')
app.use('/players/', playerRouter)

const teamRouter = require('./controllers/team')
app.use('/team/', teamRouter)

app.listen(PORT, () => {
    console.log(`You are listening on port ${PORT}`)
})