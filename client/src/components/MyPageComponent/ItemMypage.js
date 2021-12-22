import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ItemMypage.css'
// import { items } from '../assets/dummyData'
import Items from '../MainPageComponent/Items'
import ItemMypageBottom from './ItemMypageBottom';
import axios from 'axios';

function ItemMypage ({userinfo, accessToken}) {
  const [likeItem, setLikeItem] = useState([])
  
  useEffect(() => {
    axios.get('https://localhost:8443/like',{
      headers: {
        accept: 'application/json',
        Authorization: accessToken
      }
    })
    .then((res) => {
      setLikeItem(res.data.data)
    })
  }, [])


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
          <ItemMypageBottom likeItem={likeItem}/>
        </section>
      </div>
  );
}

export default ItemMypage;