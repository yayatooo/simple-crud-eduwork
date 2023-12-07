import Product from "../model/userModel.js";

export const getProduct = async (req, res) => {
  try {
    const users = await Product.find({});
    res.json(users);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getProductById = async (req, res) => {
  const productId = req.params.id;

  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const insertProduct = async (req, res) => {
  console.log("req", req);
  console.log("body insertProduct:", req.body);
  const { user_id, name, price, stock, status } = req.body;
  const newProduct = new Product({
    user_id,
    name,
    price,
    stock,
    status,
  });
  try {
    const insertedProduct = await newProduct.save();
    res.status(201).json({
      message: "Product successfully inserted",
      product: insertedProduct,
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message || "Bad Request" });
  }
};

export const updateProduct = async (req, res) => {
  const productId = req.params.id;
  const { id, name, products, price, stock, status } = req.body;

  try {
    const updateFields = { id, name, products, price, stock, status };

    const updatedProduct = await Product.findOneAndUpdate(
      { _id: productId },
      { $set: updateFields },
      { new: true } // Return the modified document
    );

    if (updatedProduct) {
      res.status(200).json({
        message: "Product successfully updated",
        product: updatedProduct,
      });
    } else {
      res.status(404).json({
        message: "Product not found or not updated",
      });
    }

    console.log(updatedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message || "Internal Server Error" });
  }
};

export const deleteProduct = async (req, res) => {
  const productId = req.params.id;

  try {
    const deletedProduct = await Product.deleteOne({ _id: productId });

    if (deletedProduct.deletedCount > 0) {
      res.status(200).json({
        message: "Product successfully deleted",
        product: deletedProduct,
      });
    } else {
      res.status(404).json({
        message: "Product not found or not deleted",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message || "Internal Server Error" });
  }
};
