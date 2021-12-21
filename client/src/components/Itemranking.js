import React from 'react';
import { Link } from 'react-router-dom';
import './Itemranking.css'

function Itemranking () {

  return (
    <div id='item-ranking-body'>
    <section id="ranking-Container">
      <article className="guide">
          <h1>...총 몇개의 상품이 있습니다.</h1>
      </article>

      <article className="ranking-items">
        <div className='ranking-number'>no.1</div>
        <div className="ranking-item-img">
          <img src="images/pickCat.jpg" alt="" />
        </div>
        <div className="item-name">이름</div>
        <div className='item-price'>가격</div>
        <div className='item-store'>편의점</div>
        <div className='item-score'>평점</div>
      </article>

    </section>
</div>
  );
}

export default Itemranking;