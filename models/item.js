const mongoose = require('mongoose');

const Item = mongoose.model('Item', {
  imgUrl: {
    type: String,
    required: true
  },
  imgcount: {
    type: Number
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  availableSizes: {
    type: [],
    required: true
  },
  mainColor: {
    type: [],
    required: true
  },
  availableColors: {
    type: Object,
    required: true
  },
  style: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  installments: {
    type: Number,
    default: 3
  },
  currencyId: {
    type: String,
    required: true
  },
  currencyFormat: {
    type: String,
    required: true
  },
  isFreeCourier: {
    type: Boolean,
    required: true
  },
  details: {
    type: [],
    required: true
  }
});

module.exports = Item;
