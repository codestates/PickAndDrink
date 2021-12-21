import React from "react";

export default function Item({item}) {
  
  return (
      <article key={item.id} className="item">
        <div className="itemImg">
          <img src={item.img} alt="" />
        </div>

        <div className='rankItemInfo'>
          <div className='emoji'>🥇</div>
          <div>{item.category}1등</div>
          <h2 >{item.name}</h2>
        </div>
      </article>
  )
}