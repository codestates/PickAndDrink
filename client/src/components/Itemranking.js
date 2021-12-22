import React, {useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import './Itemranking.css'
import { items } from '../assets/dummyData'
import RankItem from './MainPageComponent/RankItem'
import axios from "axios";

function Itemranking () {
  const [itmeList, setItemList] = useState([])
  const category = ["탄산음료", "커피", "건강음료", "유제품", "전통음료", "물", "과채음료"]
  
  useEffect(() => {
    let itemList = []
    category.map((e) => {
      axios.get(`https://localhost:8443/item?category=${e}`)
      .then((res) => {
        itemList.push(res.data.data[0])
        return itemList
      })
      .then((itemList) => {
        if (itemList.length === 7) setItemList(itemList)
      })
    })
  }, [])

  return (
    <div id='item-ranking-body'>
    <section id="ranking-Container">
      <article className="guide">
          <h1>...총 몇개의 상품이 있습니다.</h1>
      </article>
      <div className='rankList'>
      {itmeList.map((item) => <RankItem key={item.id} item={item} />)}
      </div>
      {/* <article className="ranking-items">
        <div className='ranking-number'>🥇</div>
        <div className="ranking-item-img">
          <img src="images/pickCat.jpg" alt="" />
        </div>
        <div className="item-name">이름</div>
        <div className='item-price'>가격</div>
        <div className='item-store'>편의점</div>
        <div className='item-score'>평점</div>
      </article> */}

    </section>
</div>
  );
}

export default Itemranking;