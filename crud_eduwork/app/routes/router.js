import express from "express";
const router = express.Router();
import {
  getProduct,
  getProductById,
  insertProduct,
  updateProduct,
  deleteProduct,
} from "../controller/userController.js";

router.get("/product", (req, res) => {
  res.send({
    status: "berhasil",
    message: "Anjay",
  });
});
router.get("/products", getProduct);
router.get("/products/:id", getProductById);
router.post("/products/", insertProduct);
router.patch("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);

// router.get("/data", (req, res) => {
//   db.collection("belajar")
//     .find()
//     .toArray()
//     .then((result) => res(result))
//     .then((error) => res(error));
// });

export default router;
