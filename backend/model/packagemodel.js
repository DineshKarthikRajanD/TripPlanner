const mongoose = require('mongoose');

const tripPackageSchema = new mongoose.Schema({
  packageName: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  destination: {
    type: String,
    required: true
  },
  highlights: {
    stay: {
      type: String,
      required: true
    },
    meals: {
      type: String,
      required: true
    },
    sightseeing: {
      type: [String],
      required: true
    },
    activities: {
      type: [String],
      required: true
    },
    transportation: {
      type: String,
      required: true
    }
  },
  cost: {
    type: Number,
    required: true
  },
  inclusions: {
    type: [String],
    required: true
  },
  exclusions: {
    type: [String],
    required: true
  }
});

const TripPackage = mongoose.model('TripPackage', tripPackageSchema);

module.exports = TripPackage;
