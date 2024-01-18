const express = require('express');
const router = express.Router();
const exercisesCtrl = require('../controllers/exercises');
const ensureLoggedIn = require('../config/ensureLoggedIn');


// GET /workouts
router.get('/', exercisesCtrl.index);
// GET /workouts/new
router.get('/new', ensureLoggedIn, exercisesCtrl.new);
router.get('/:id', exercisesCtrl.show);
router.post('/workouts/:id/exercises', ensureLoggedIn, exercisesCtrl.create);
// POST /workouts
router.post('/', exercisesCtrl.create);

	
module.exports = router;