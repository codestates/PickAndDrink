import React, { useEffect } from "react";
import Modal from "../Modal";

export default function Item({item, openModalHandler, isOpen, curItemId, modalItem}) {
  

  return (
      <article key={item.id} className="item" onClick={() => openModalHandler(item)}>
        <div className="itemImg">
          <img src={item.img} alt="" />
        </div>
        <div className='rankItemInfo'>
          <div className='emoji'>⭐</div>
          <div>{item.category}1등</div>
          <h2 >{item.name}</h2>
        </div>
      </article>
  )
}