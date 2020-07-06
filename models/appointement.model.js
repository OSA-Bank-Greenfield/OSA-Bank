//put your schema here
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./user.model.js');

const appointementSchema = new Schema({
  date: {
    type: Date,
  },
  time: {
    type: String,
  },
  agency: {
    type: String,
  },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: User.modelName },
});

const Appointement = mongoose.model('appointement', appointementSchema);

// Fun to Create an appointement
async function createAppointement(date, time, agency, userId) {
  const appointement = new Appointement({
    date,
    time,
    agency,
    userId,
  });
  const result = await appointement.save();
  console.log(result);
}

// createAppointement(
//   '1994-05-23',
//   '08:00 AM',
//   'Ghazela',
//   '5efda8a469557a42107407d0'
// );

module.exports = Appointement;
