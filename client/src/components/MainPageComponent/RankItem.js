import React from "react";
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

export default function RankItem({isLogin, setToken, item, curCategory}) {
  const navigate = useNavigate()

  const itemInfo = (e) => {
    // console.log(e.id) // 클릭한 아이템 id 받기
    // console.log(setToken) // 현재 액세스
    const id = e.id

    if (!isLogin) {
      alert('먼저 로그인하세요!')
      return navigate('/login')
    }

    axios({
      method: 'POST',
      url: `https://localhost:8443/like/${id}`,
      headers: {
        accept: 'application/json',
        authorization: setToken
      },
    })
    .then(result => {
      console.log(result)
      if (result.data.message === 'add like') alert('좋아요한 상품에 추가되었습니다.')
      else if (result.data.message === 'cancel like') alert('좋아요한 상품에서 제거되었습니다.')
    })
    .catch(err => {
      alert('에러가 발생했습니다. 잠시 후 다시 시도해 주세요.')
    }) 
  }
  return (
    <div>
      {
      curCategory === '전체' ?
        <article key={item.id} className="ranking-items">
          <div className='goldMedal'></div>
          <div className="ranking-item-img"><img src={item.img} alt="" /></div>
          <div className="itemInfo item-name">{item.name}</div>
          <div className='itemInfo item-store'>{item.store_name}</div>
          <div className='itemInfo item-price'>{item.price}원</div>
          <div className='itemInfo like-count'>👍&emsp;{item.ranking_count}</div>
          <div className='itemInfo event-info'>{item.event_info}</div>
          <div className='itemInfo favorites-item' onClick={() => itemInfo(item)} >⭐</div>
        </article>
      : 
        <article key={item.id} className="ranking-items">
          <div className='ranking-number'></div>
          <div className="ranking-item-img"><img src={item.img} alt="" /></div>
          <div className="itemInfo item-name">{item.name}</div>
          <div className='itemInfo item-store'>{item.store_name}</div>
          <div className='itemInfo item-price'>{item.price}원</div>
          <div className='itemInfo like-count'>👍&emsp;{item.ranking_count}</div>
          <div className='itemInfo event-info'>{item.event_info}</div>
          <div className='favorites-item' onClick={() => itemInfo(item)} >⭐</div>
        </article>
      }
    </div>
  )
}

// 현재 카테고리 상태가 전체라면 메달을 모두 금메달로