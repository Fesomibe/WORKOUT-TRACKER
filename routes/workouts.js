const express = require('express');
const router = express.Router();
const workoutsCtrl = require('../controllers/workouts');
const ensureLoggedIn = require('../config/ensureLoggedIn');


// GET /workouts/index
router.get('/', workoutsCtrl.index);
// GET /workouts/new
router.get('/new', ensureLoggedIn, workoutsCtrl.new);
// GET /workouts/:id (show functionality) MUST be below new route
router.get('/:id', workoutsCtrl.show);
// router.post('/', workoutsCtrl.create);
router.post('/', ensureLoggedIn, workoutsCtrl.create);
// POST /workouts/:id/exercises
router.post('/:id/exercises', workoutsCtrl.addExercise);
// GET /workouts/:id/edit
router.get('/:id/edit', workoutsCtrl.edit);
// PUT /workouts/:id
router.put('/:id', ensureLoggedIn, workoutsCtrl.update);
// DELETE /workoutId/exercises/:id
router.delete('/:workoutId/exercises/:id', ensureLoggedIn, workoutsCtrl.delete);



module.exports = router;