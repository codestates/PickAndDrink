import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ItemMypage.css'
// import { items } from '../assets/dummyData'
import Items from '../MainPageComponent/Items'
import ItemMypageBottom from './ItemMypageBottom';
import axios from 'axios';

function ItemMypage ({userinfo, setToken}) {
  const [likeItem, setLikeItem] = useState([])
  const [isChanged, setIsChanged] = useState(false)
  const isMypage = true // 마이페이지 여부를 프롭스로 내려주기 위해 사용

  // 좋아요 누른 아이템 클릭 시 제거하고 새로고침하기 위해 사용
  // 프롭스로 item까지 내려준뒤 클릭하면 true > useEffect가 새로고침후 초기화
  const itemRefresh = () => { 
    setIsChanged(true)
  }
  
  useEffect(() => {
    axios.get('https://localhost:8443/like',{
      headers: {
        accept: 'application/json',
        Authorization: setToken
      }
    })
    .then((res) => {
      setLikeItem(res.data.data)
    })
    setIsChanged(false)
  }, [isChanged])


  return (
    <div id='item-mypage-body'>
        <section id="mypage-Container"> 
          <article className="profile"> 
            <div className="profile-Img">
              <img src="images/blueCat.png" alt="" />
            </div> 
              {
                userinfo ? <div className='welcome'>{`${userinfo.nickname}님 반갑습니다.`}</div>
                : ''
              }
          </article>
          <div className='userLike'>
            <article className='user-like'>{`${userinfo.nickname}님의 좋아요 목록`}</article>
          </div>
          <ItemMypageBottom likeItem={likeItem} setToken={setToken} itemRefresh={itemRefresh} isMypage={isMypage} />
        </section>
      </div>
  );
}

export default ItemMypage;