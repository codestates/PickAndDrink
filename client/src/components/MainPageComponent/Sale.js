import React from "react";

export default function Sale({sale}) {
  return (
      <article key={sale.id} className="sale">
        <div className="saleImg">
          <img src={sale.img} alt="" />
        </div>
        <div className="endSale">{sale.category}</div>
        <h2>{sale.name}</h2>
      </article>
  )
}