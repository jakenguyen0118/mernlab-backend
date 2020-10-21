const { Schema, model } = require('mongoose')
const mongoose = require('../db/connection')

const teamSchema = new Schema({
	name: String,
	img: String,
	players: [{ ref: 'Players', type: mongoose.Types.ObjectId }],
})

const Team = model('Team', teamSchema)

module.exports = Team