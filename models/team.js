const { Schema, model } = require('mongoose')
const mongoose = require('../db/connection')

const teamSchema = new Schema(
    {
        name: String,
        img: String,
    },
)

const Team = model('Team', teamSchema)

module.exports = Team