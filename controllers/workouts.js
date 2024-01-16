const Workout = require('../models/workout');
// const Performer = require('../models/performer');

module.exports = {
  index,
  show,
  new: newWorkout,
  create
};

async function index(req, res) {
  const workouts = await Workout.find({});
  res.render('workouts/index', { title: 'Workout Tracker', workouts });
}

async function show(req, res) {
  
}

function newWorkout(req, res) {
  // We'll want to be able to render an  
  // errorMsg if the create action fails
  res.render('workouts/new', { title: 'Add Workout', errorMsg: '' });
}

async function create(req, res) {
  // convert nowShowing's checkbox of nothing or "on" to boolean
  // req.body.nowShowing = !!req.body.nowShowing;
  // Remove empty properties so that defaults will be applied
  console.log(req.body)
  // Models are responsible for CRUD'ing the date
  Workout.create(req.body);
  // Always do a redirect when data has been changed
  res.redirect('/workouts');
}