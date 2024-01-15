const mongoose = require('mongoose');
 const Schema = mongoose.Schema;


// Exercise Schema
const exerciseSchema = new Schema({
  name: String,
  description: String,
  image: String
},{
  timestamps: true
});
// Workout Schema
const workoutSchema = new Schema({
  googleId: { type: Schema.Types.ObjectId, ref: 'User' },
  name: String,
  description: String,
  exercises: [{ type: Schema.Types.ObjectId, ref: 'Exercise' }]
},{
  timestamps: true
});
// Workout History Schema
// const workoutHistorySchema = new Schema({
//   googleId: { type: Schema.Types.ObjectId, ref: 'User' },
//   workoutId: { type: Schema.Types.ObjectId, ref: 'Workout' },
//   date: Date,
//   duration: Number
// },{
//   timestamps: true
// });



 module.exports = mongoose.model('Workout', workoutSchema);