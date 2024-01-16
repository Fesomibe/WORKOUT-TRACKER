const mongoose = require('mongoose');
 const Schema = mongoose.Schema;


// Exercise Schema
const exerciseSchema = new Schema({
  name: String,
  description: String,
  targetArea: String,
  difficulty: {
    type: String,
    enum: ['easy', 'medium', 'hard']
  },
  image: String,
  user: { type: Schema.Types.ObjectId, ref: 'User' },
},{
  timestamps: true
});




 module.exports = mongoose.model('Exercise', exerciseSchema);