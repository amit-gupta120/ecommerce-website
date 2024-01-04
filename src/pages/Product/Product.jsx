import React, { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import BalanceIcon from "@mui/icons-material/Balance";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Product = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const images = [
    "https://images.pexels.com/photos/2923922/pexels-photo-2923922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3310799/pexels-photo-3310799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img
            src={images[0]}
            alt=""
            onClick={(e) => setSelectedImage(0)}
            style={{ width: 100 }}
          />
          <img
            src={images[1]}
            alt=""
            onClick={(e) => setSelectedImage(1)}
            style={{ width: 100 }}
          />
        </div>

        <div className="mainImages">
          <img src={images[selectedImage]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Suit</h1>
        <span className="price">Rs. 4599</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa laborum
          delectus asperiores fugit hic ea officia fugiat aliquam deleniti rerum
          cupiditate repellendus corrupti, numquam iste praesentium architecto
          optio nobis libero?
        </p>
        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button className="addButton">
          <AddShoppingCartIcon />
          ADD TO CART
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorderIcon />
            ADD TO WISHLIST
          </div>
          <div className="item">
            <BalanceIcon />
            ADD TO COMPARE
          </div>
        </div>

        <div className="info">
          <span>Vendor:Suit</span>
          <span>Product Type:Formal</span>
          <span>Tag:Suit,Men,Formals</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQs</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
