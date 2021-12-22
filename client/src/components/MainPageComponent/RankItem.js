import React from "react";

export default function RankItem({item}) {

  return (
      <article key={item.id} className="ranking-items">
        <div className='ranking-number'>🥇</div>
        <div className="ranking-item-img"><img src={item.img} alt="" /></div>
        <div className="itemInfo item-name">{item.name}</div>
        <div className='itemInfo item-store'>GS25</div> {/* {item.store_name}로 쓰시면 됩니다.*/}
        <div className='itemInfo item-price'>{item.price}</div>
        <div className='itemInfo like-count'>3</div> {/* {item.ranking_count}로 쓰시면 됩니다.*/}
        <div className='itemInfo event-info'>1 + 1</div> {/* {item.event_info}로 쓰시면 됩니다.*/}
        <div className='itemInfo favorites-item'>⭐</div>  {/* 내가 좋아하는 아이템이라면 노란색별 아니면 빈 별 */}
      </article>
  )
}