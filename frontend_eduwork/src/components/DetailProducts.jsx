import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const DetailProducts = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  //   const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getProductById();
  }, []);

  const getProductById = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/products/${id}`);
      setName(response.data.name);
      setPrice(response.data.price);
      setStock(response.data.stock);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5">
      <div className="column is-half">
        <form>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                placeholder="Name"
                defaultValue={name}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Price</label>
            <div className="control">
              <input
                type="text"
                className="input"
                placeholder="Price"
                defaultValue={price}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Stock</label>
            <div className="control">
              <input
                type="text"
                className="input"
                placeholder="Stock"
                defaultValue={stock}
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <Link to="/" type="submit" className="button is-success">
                Back to Home
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DetailProducts;
