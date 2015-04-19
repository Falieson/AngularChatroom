

module.exports.schema = {
  username: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: function() {
      return new Date();
    }
  }
};


