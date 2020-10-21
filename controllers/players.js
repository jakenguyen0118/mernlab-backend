const Players = require('../models/players')
const { Router } = require('express')
const router = Router()

// seed route
router.get('/seed', (req, res) => {
	const seedPlayers = [
		{
			name: 'BrokenBlade',
			role: 'Top',
			img:
				'https://am-a.akamaihd.net/image/?resize=750:&f=https%3A%2F%2Flolstatic-a.akamaihd.net%2Fesports-assets%2Fproduction%2Fplayer%2Fbroken-blade-jal9l7d2.png',
		},
		{
			name: 'Spica',
			role: 'Jungle',
			img:
				'https://am-a.akamaihd.net/image/?resize=750:&f=https%3A%2F%2Flolstatic-a.akamaihd.net%2Fesports-assets%2Fproduction%2Fplayer%2Fspica-899o1j6u.png',
		},
		{
			name: 'Bjergsen',
			role: 'Mid',
			img:
				'https://am-a.akamaihd.net/image/?resize=750:&f=https%3A%2F%2Flolstatic-a.akamaihd.net%2Fesports-assets%2Fproduction%2Fplayer%2Fbjergsen-d8v00kci.png',
		},
		{
			name: 'Doublelift',
			role: 'Bot',
			img:
				'https://am-a.akamaihd.net/image/?resize=750:&f=https%3A%2F%2Flolstatic-a.akamaihd.net%2Fesports-assets%2Fproduction%2Fplayer%2Fdoublelift-3d0pxw6l.png',
		},
		{
			name: 'Biofrost',
			role: 'Support',
			img:
				'https://am-a.akamaihd.net/image/?resize=750:&f=https%3A%2F%2Flolstatic-a.akamaihd.net%2Fesports-assets%2Fproduction%2Fplayer%2Fbiofrost-6h6ohg2m.png',
		},
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
	res.json(
		await Players.findByIdAndUpdate(req.params.id, req.body, { new: true })
	)
})

// delete route
router.delete('/:id', async (req, res) => {
	res.json(await Players.findByIdAndDelete(req.params.id))
})

module.exports = router
