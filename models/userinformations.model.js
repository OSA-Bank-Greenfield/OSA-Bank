//put your schema here
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./user.model.js');

const userInformationsSchema = new Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  username: {
    type: String,
  },
  occupation: {
    type: String,
  },
  state: {
    type: String,
  },
  city: {
    type: String,
  },
  zipcode: {
    type: Number,
  },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: User.modelName },
});

const UserInformations = mongoose.model(
  'userInformations',
  userInformationsSchema
);

// Fun to Create a userInf profile
async function createUser(
  firstName,
  lastName,
  username,
  occupation,
  state,
  city,
  zipcode,
  userId
) {
  const userInf = new UserInformations({
    firstName,
    lastName,
    username,
    occupation,
    state,
    city,
    zipcode,
    userId,
  });
  const result = await userInf.save();
  console.log(result);
}

// createUser(
//   'ouss',
//   'sfr',
//   'amessuo88',
//   'engineer',
//   'ben arous',
//   'mégrine',
//   2024,
//   '5efda8a469557a42107407d0'
// );

module.exports = UserInformations;
