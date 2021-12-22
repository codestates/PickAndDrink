import React from "react";

export default function Items({item}) {
  
  return (
      <article key={item.id} className="like-items">
        <div className="like-item-img">
          <img src={item.img} alt="" />
        </div>
          <div className="like-item">{item.name}</div>
          <span className="like-button"></span>
          <div className="like-item-price">{item.price}</div>
          <div className="date">2021.12.30</div>
      </article>
  )
}