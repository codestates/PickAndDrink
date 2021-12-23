import React from "react";
import axios from 'axios'

export default function Item({item, setToken, itemRefresh, isMypage}) {
  // isMypage는 할당되지 않은 경우(undefined) falsy한 값이므로 하단 구현문이 동작할때 Mypage일때만 상품의 정보를 가져옵니다

  const storeName = {
    1: "GS25",
    2: "CU",
    3: "미니스톱",
    4: "이마트24",
    5: "세븐일레븐"
  }

  const eventName = {
    1: '1+1',
    2: '2+1'
  }

  const postLike = (item) => {
    axios({
      method: 'POST',
      url: `https://localhost:8443/like/${item.id}`,
      headers: {
        accept: 'application/json',
        authorization: setToken
      }
    })
    .then(result => {
      if (result.data.message === 'add like') window.alert('좋아요한 상품에 추가되었습니다')
      else if (result.data.message === 'cancel like') window.alert('좋아요한 상품에서 제거되었습니다')
      if (itemRefresh) itemRefresh(true)
    })
    .catch(err => {
      console.log(err)
      window.alert('로그인 상태를 확인하세요!')
    })
  }

  return (
      <article key={item.id} className="item">
        <div className="itemImg">
          <img src={item.img} alt="" />
        </div>

        <div className='rankItemInfo'>
          <div className='emoji' onClick={() => postLike(item)}>⭐</div>
          {isMypage ? 
          <div>
            <span>{storeName[item.storeId]}|</span><span>{eventName[item.eventId]}|</span><span>{item.price}원</span>
          </div> 
          : <div>{item.category}1등</div>}
          <h2 >{item.name}</h2>
        </div>
      </article>
  )
}