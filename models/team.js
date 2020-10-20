const { Schema, model } = require('mongoose')
const mongoose = require('../db/connection')

const teamSchema = new Schema(
    {
        name: String
        // players: [
        //     {
        //         ref: 'Players', type: mongoose.Types.ObjectId
        //     }
        // ]
    },
    {timestamps: true}
)

const Team = model('Team', teamSchema)

module.exports = Team