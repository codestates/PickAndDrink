import React from "react";

export default function RankItem({item}) {
//   console.log(item, '------------')
  return (
      <article key={item.id} className="ranking-items">
        <div className='ranking-number'>🥇</div>
        <div className="ranking-item-img">
          <img src={item.img} alt="" />
        </div>
        <div className="item-name">{item.name}</div>
        <div className='item-price'>{item.price}</div>
        <div className='item-store'>편의점</div>
        <div className='item-score'>평점</div>
      </article>
  )
}