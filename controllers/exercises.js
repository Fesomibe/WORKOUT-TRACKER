const Exercise = require('../models/exercise');
// const Performer = require('../models/performer');

module.exports = {
  index,
  show,
  new: newExercise,
  create
};

async function index(req, res) {
  const exercises = await Exercise.find({});
  res.render('exercises/index', { title: 'Workout Tracker', exercises });
}

async function show(req, res) {
  
}

function newExercise(req, res) {
  // We'll want to be able to render an  
  // errorMsg if the create action fails
  // const exercises = await Exercise.find({}).sort('name');
  res.render('exercises/new', { title: 'Add Exercise', errorMsg: '' });
}

async function create(req, res) {
 // Attach the user to req.body
 req.body.user = req.user._id
  try {
    // Update this line because now we need the _id of the new movie
    const exercise = await Exercise.create(req.body);
    // Redirect to the new movie's show functionality 
    res.redirect(`/`);
  } catch (err) {
    // Typically some sort of validation error
    console.log(err);
    res.render('exercises/new', { title: 'Add Exercise', errorMsg: err.message });
  }
}

