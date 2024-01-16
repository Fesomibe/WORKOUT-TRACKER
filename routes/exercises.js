const express = require('express');
const router = express.Router();
const exercisesCtrl = require('../controllers/exercises');


// GET /workouts
router.get('/', exercisesCtrl.index);
// GET /workouts/new
router.get('/new', exercisesCtrl.new);
// GET /workouts/:id (show functionality) MUST be below new route
// router.get('/:id', exercisesCtrl.show);
// POST /workouts
router.post('/', exercisesCtrl.create);
	
module.exports = router;