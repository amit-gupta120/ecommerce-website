import React from "react";
import "./List.scss";
import Card from "../Card/Card";

const List = () => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/769733/pexels-photo-769733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/769732/pexels-photo-769732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Shirt",
      //   isNew: True,
      oldPrice: 1299,
      new: 999,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Watch",
      //   isNew: True,
      oldPrice: 12990,
      new: 8999,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/2068349/pexels-photo-2068349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Jeans",
      oldPrice: 1599,
      new: 999,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/732425/pexels-photo-732425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Hat",
      oldPrice: 599,
      new: 299,
    },
  ];

  return <div className="list">
    {data?.map(item=>(
        <Card item={item} key={item.d}/>
    ))}
  </div>;
};

export default List;
