import React from "react";

export default function Sale({sale}) {
  console.log(sale)
  return (
      <article key={sale.id} className="sale">
        <div className="saleImg">
          <img src="images/pickCat.jpg" alt="" />
        </div>
        <div className="endSale">{sale.category}</div>
        <h2>{sale.name}</h2>
      </article>
  )
}