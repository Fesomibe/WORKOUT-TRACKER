const express = require('express');
const router = express.Router();
const workoutsCtrl = require('../controllers/workouts');


// GET /workouts/index
router.get('/', workoutsCtrl.index);
// GET /workouts/new
router.get('/new', workoutsCtrl.new);
// GET /workouts/:id (show functionality) MUST be below new route
router.get('/:id', workoutsCtrl.show);
// POST /workouts
router.post('/', workoutsCtrl.create);
	
module.exports = router;