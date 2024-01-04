import React from "react";
import "./Cart.scss";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const Cart = () => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/769733/pexels-photo-769733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/769732/pexels-photo-769732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Shirt",
      desc:"Description",
      //   isNew: True,
      oldPrice: 1299,
      price: 999,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Watch",
      desc:"Description",
      //   isNew: True,
      oldPrice: 12990,
      price: 8999,
    },
  ];

  return (
    <div className="cart">
      <h1>Products in your Cart</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0,100)}</p>
            <div className="price">1 x{item.price}</div>
          </div>
          <DeleteOutlineOutlinedIcon className="delete" />
        </div>
      ))}
       <div className="total">
        <span>SUBTOTAL</span>
        <span>Rs.4784</span>
       </div>
       <button>PROCEED TO CHECKOUT</button>
       <span className="reset">Reset Cart</span>
    </div>
   
  );
};

export default Cart;
