import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <Link className="linkCard" to={`/product/${item.id}`}>
      <div classsName="card">
        <div className="image">
          <img src={item.img} alt="" className="mainImage" />
          {/* <img   src={item.img2} alt="" className="secondImage" /> */}
        </div>
        <h2>{item.title}</h2>
        <div className="prices">
          <h3>Rs {item.oldPrice}</h3>
          <h3>Rs {item.new}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
