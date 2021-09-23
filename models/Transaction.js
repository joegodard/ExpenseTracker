const mongoose = require('mongoose');

const Schema = mongoose.Schema,
      ObjectId = Schema.ObjectId;
// Schema for transactions db
const TransactionSchema = new Schema({
  text: {
    type: String,
    trim: true,
    required: [true, 'Please add some text']
  },
  amount: {
    type: Number,
    required: [true, 'Please add an amount']
  },
  accountID: {
    type: ObjectId,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Transaction', TransactionSchema);