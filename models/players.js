const { Schema, model } = require('mongoose')
const mongoose = require('../db/connection')

const playersSchema = new Schema(
    {
        name: String,
        role: String,
        img: String,
        team: {ref: 'Team', type: mongoose.Types.ObjectId}
    }
)

const Players = model('Players', playersSchema)

module.exports = Players
