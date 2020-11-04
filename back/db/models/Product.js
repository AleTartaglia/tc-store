const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  brand: {
    type: Schema.Types.String,
    ref: "brand",
    require: true,
  },
  categories: [
    {
      type: Schema.Types.String,
      ref: "category",
    },

  ],
  price: {
    type: Number,
    ref: "order",
    required: true,
  },
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "review",
    }],
  pictures: [{
    type: Schema.Types.String,
  }],
  brand: {
    type: Schema.Types.String,
    ref: "brand",
    require: true

  },

  description: {
    type: String,
    require: true,
  },
});

const Product = mongoose.model("product", productSchema);
module.exports = Product;
