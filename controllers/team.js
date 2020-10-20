const Team = require('../models/team')
const Players = require('../models/players')
const { Router } = require('express')
const router = Router()
const mongoose = require('mongoose')
const toId = mongoose.Types.ObjectId

// seed route
router.get('/seed', (req, res) => {
	const seedTeam = [
		{ name: "Team Solo Mid"}
	]

	Team.create(seedTeam, (err, data) => {
		res.json(data)
	})
})

// match team with player
router.get('/:player/:team', async (req, res) => {
    const team = toId(req.params.team)

    const player = await Players.findById(req.params.player)
    player.team = team
    player.save()
    res.json(player)
})

// see team + players
router.get('/org', async (req, res) => {
    const player = await Players.find({}).populate({path: 'team', model: 'Team'})
    res.json(player)
})

// index route
router.get('/', async (req, res) => {
    res.json(await Team.find({}))
})

// create route
router.post('/', async (req, res) => {
	res.json(await Team.create(req.body))
})

// update route
router.put('/:id', async (req, res) => {
    res.json(await Team.findByIdAndUpdate(req.params.id, req.body, {new: true}))
})

// delete route
router.delete('/:id', async (req, res) => {
    res.json(await Team.findByIdAndDelete(req.params.id))
})

module.exports = router
