import React from "react";
import { useState } from "react";
import Modal from "../Modal";

export default function Sale({sale, openModalHandler, isOpen, curItemId, modalItem}) {

  return (
      <article key={sale.id} className="sale" onClick={() => openModalHandler(sale)}>
        <div className="saleImg">
          <img src={sale.img} alt="" />
        </div>
        <div className="endSale">{sale.category}</div>
        <h2>{sale.name}</h2>
      </article>
  )
}