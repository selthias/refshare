const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RefsSchema = new Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  name: {
    type: String
  },
  isFolder: {
    type: Boolean,
    required: true
  },
  description: {
    type: String
  },
  isPrivate: {
    type: Boolean,
    default: false
  },
  children: [
    {
      type: Schema.Types.ObjectId,
      ref: "refs"
    }
  ],
  favorites: [
    {
      type: Schema.Types.ObjectId,
      ref: "users"
    }
  ],
  parent: {
    type: Schema.Types.ObjectId,
    ref: "refs"
  },
  isRoot: {
    type: Boolean,
    default: false
  }
});

module.exports = Refs = mongoose.model("refs", RefsSchema);
