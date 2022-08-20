const { Schema, model, Types } = require("mongoose");

console.log("start PB");

const pbSchema = new Schema({
  pbText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 100,
  },

  pb_id: {
    type: Number,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
    get: (createdTime) => moment(createdTime).format("LLLL"),
  },

  user_id: {
    type: Number,
    required: true,
  },

  completed: {
    type: Boolean,
    default: false,
  },
});

const Pb = model("Pb", pbSchema);

console.log("End PB");

module.exports = Pb;
