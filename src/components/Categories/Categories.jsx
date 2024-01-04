import React from "react";
import "./Categories.scss";

import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img src="https://images.pexels.com/photos/5947554/pexels-photo-5947554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1F" alt="" />
          <button>
            <Link to="/products/1" className="link">
              Sale
            </Link>
          </button>
        </div>
        <div className="row">
          <img src="https://images.pexels.com/photos/5868738/pexels-photo-5868738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
          <button>
            <Link to="/products/1" className="link">
              Women
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img src="https://images.pexels.com/photos/5935738/pexels-photo-5935738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
          <button>
            <Link to="/products/1" className="link">
              Men
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img src="https://images.pexels.com/photos/2294342/pexels-photo-2294342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
              <button>
                <Link to="/products/1" className="link">
                  Kids
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img src="https://images.pexels.com/photos/13600672/pexels-photo-13600672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""    />
              <button>
                <Link to="/products/1" className="link">
                  Shoes
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img src="https://images.pexels.com/photos/1453008/pexels-photo-1453008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <button>
            <Link to="/products/1" className="link">
              Accessories
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
