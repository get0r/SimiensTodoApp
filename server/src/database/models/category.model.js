const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },

  subTitle: {
    type: String,
    required: true,
    trim: true,
  },

  ownerId: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
    ref: 'users',
  },

  totalTodos: {
    type: Number,
    default: 0,
  },

  pendingTodos: {
    type: Number,
    default: 0,
  },

  completedTodos: {
    type: Number,
    default: 0,
  },
},
{
  timestamps: true,
});

const CategoryModel = mongoose.model('Category', categorySchema);

module.exports = CategoryModel;
