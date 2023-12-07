// import mongoose from "mongoose";

// const productSchema = new mongoose.Schema({
//   user_id: String,
//   name: String,
//   price: Number,
//   stock: Number,
//   status: Boolean,
// });

// const Product = mongoose.model("model", productSchema, "product");

// export default Product;

import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    user_id: String,
    name: String,
    price: Number,
    stock: Number,
    status: String,
  },
  { versionKey: false }
);

const Product = mongoose.model("model", productSchema, "product");

export default Product;
