const mongoose = require('mongoose');
 const Schema = mongoose.Schema;

// Workout Schema
const workoutSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  name: String,
  description: String,
  exercises: [{ type: Schema.Types.ObjectId, ref: 'Exercise' }]
},{
  timestamps: true
});



 module.exports = mongoose.model('Workout', workoutSchema);