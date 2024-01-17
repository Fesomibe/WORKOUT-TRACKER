const Workout = require('../models/workout');
const Exercise = require('../models/exercise');

module.exports = {
  index,
  show,
  new: newWorkout,
  create,
  addExercise
};

async function index(req, res) {
  const workouts = await Workout.find({});
  res.render('workouts/index', { title: 'Workout Tracker', workouts });
}

async function show(req, res) {
  const workout = await Workout.findById(req.params.id).populate('exercises').exec();
  const exercises = await Exercise.find({});
  res.render('workouts/show', { title: workout.name, workout, exercises })
}

function newWorkout(req, res) {
  // We'll want to be able to render an  
  // errorMsg if the create action fails
  res.render('workouts/new', { title: 'Add Workout', errorMsg: '' });
}

async function create(req, res) {
 req.body.user = req.user._id
  try {
    // Update this line because now we need the _id of the new movie
    const workout = await Workout.create(req.body);
    // Redirect to the new movie's show functionality 
    res.redirect(`/workouts/${workout._id}`);
  } catch (err) {
    // Typically some sort of validation error
    console.log(err);
    res.render('workouts/new', { errorMsg: err.message });
  }
}

async function addExercise(req, res) {
  try {
    const workout = await Workout.findById(req.params.id);
    workout.exercises.push(req.body.exercises);
    await workout.save();
    res.redirect(`/workouts/${req.params.id}`);
  } catch (err) {
    console.error(err);
    res.redirect(`/workouts/${req.params.id}`);
  }
}