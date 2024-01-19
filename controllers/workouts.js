const Workout = require('../models/workout');
const Exercise = require('../models/exercise');

module.exports = {
  index,
  show,
  new: newWorkout,
  create,
  addExercise,
  delete: deleteExercise,
  edit,
  update
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
    // Update this line because now we need the _id of the new workout
    const workout = await Workout.create(req.body);
    // Redirect to the new workout's show functionality 
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

async function deleteExercise(req, res) {
  console.log(req.params.id)
  // Note the cool "dot" syntax to query on the property of a subdoc
  const workout = await Workout.findById(req.params.workoutId);
  // Rogue user!
  console.log(workout);
  if (!workout) return res.redirect('/workouts');
  // Remove the exercise using the remove method available on Mongoose arrays
  workout.exercises.remove(req.params.id);
  // Save the updated movie doc
  await workout.save();
  // Redirect back to the workout's show view
  res.redirect(`/workouts/${workout._id}`);
}

async function edit(req, res) {
  const workout = await Workout.findById(req.params.id);
  const exercises = await Exercise.find();

  res.render('workouts/edit', { title: 'Edit Workout', workout, exercises });
}

async function update(req, res) {
  try {
    const workout = await Workout.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.redirect(`/workouts/${workout._id}`);
  } catch (err) {
    console.error(err);
    res.redirect(`/workouts/${req.params.id}/edit`);
  }
}