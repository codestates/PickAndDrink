import React from "react";
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

export default function Item({item, isLogin, setToken}) {

  const navigate = useNavigate()

  const postAddLike = (item) => {

    if (!isLogin) {
      alert('먼저 로그인하세요!')
      return navigate('/login')
    }

    axios({
      method: 'POST',
      url: `https://localhost:8443/like/${item.id}`,
      headers: {
        accept: 'application/json',
        authorization: setToken
      }
    })
    .then(result => {
      // console.log(result)
      if (result.data.message === 'add like') window.alert('좋아요한 상품에 추가되었습니다')
      else if (result.data.message === 'cancel like') window.alert('좋아요한 상품에서 제거되었습니다')
    })
    .catch(err => {
      console.log(err)
      window.alert('로그인 상태를 확인하세요!')
    })
  }

  return (
    <div className='event' key={item.id}>
    <div className='eventImg'>
      <img src={item.img} alt='' />
    </div>
    <div className='eventInfo'>
      <div className='eventCategory'>{item.category}<div className='star' onClick={() => postAddLike(item)} >⭐</div></div>
      <div>{item.name} <br /> {item.price}원</div>
    </div>
  </div>
  )
}