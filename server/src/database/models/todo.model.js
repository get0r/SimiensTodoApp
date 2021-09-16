const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },

  desc: {
    type: String,
    trim: true,
  },

  categoryId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'categories',
  },

  dueDate: Date,

  isPending: {
    type: Boolean,
    default: true,
  },

  isCompleted: {
    type: Boolean,
    default: false,
  },

},
{
  timestamps: true,
});

const TodoModel = mongoose.model('Todo', todoSchema);

module.exports = TodoModel;
