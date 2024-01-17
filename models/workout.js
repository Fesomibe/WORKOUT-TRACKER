const mongoose = require('mongoose');
 const Schema = mongoose.Schema;

 const reviewSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 5
  }
}, {
  timestamps: true
});

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