import React from 'react';
import { Link } from 'react-router-dom';
import './Itemranking.css'
import { items } from '../assets/dummyData'
import RankItem from './MainPageComponent/RankItem'

function Itemranking () {

  return (
    <div id='item-ranking-body'>
    <section id="ranking-Container">
      <article className="guide">
          <h1>...총 몇개의 상품이 있습니다.</h1>
      </article>
      <div className='rankList'>
      {items.map((item) => <RankItem key={item.id} item={item} />)}
      </div>
    </section>
</div>
  );
}

export default Itemranking;