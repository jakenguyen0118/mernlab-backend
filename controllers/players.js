const Players = require('../models/players')
const { Router } = require('express')
const router = Router()

// seed route
router.get('/seed', (req, res) => {
    const seedPlayers = [
        { name: "BrokenBlade", role: "Top"},
        { name: "Spica", role: "Jungle"},
        { name: "Bjergsen", role: "Mid"},
        { name: "Doublelift", role: "Bot"},
        { name: "Biofrost", role: "Support"}
    ]

    Players.create(seedPlayers, (err, data) => {
        res.json(data)
    })
})

// index route
router.get('/', async (req, res) => {
    res.json(await Players.find({}))
})

// create route
router.post('/', async (req, res) => {
	res.json(await Players.create(req.body))
})

// update route
router.put('/:id', async (req, res) => {
    res.json(await Players.findByIdAndUpdate(req.params.id, req.body, {new: true}))
})

// delete route
router.delete('/:id', async (req, res) => {
    res.json(await Players.findOneAndDelete(req.params.id))
})

module.exports = router