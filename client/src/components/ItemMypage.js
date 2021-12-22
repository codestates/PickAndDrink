import React from 'react';
import { Link } from 'react-router-dom';
import './ItemMypage.css'
// import { items } from '../assets/dummyData'
import Items from './MainPageComponent/Items'
import ItemMypageBottom from './ItemMypageBottom';

function ItemMypage () {

  return (
    <div id='item-mypage-body'>
        <section id="mypage-Container"> 
          <article className="profile"> 
            <div className="profile-Img">
              <img src="images/pickCat.png" alt="" />
            </div> 
            <div className="welcome">
              <div>XXX님 반갑습니다.</div>
            </div> 
          </article>
          <div className='userLike'>
           <article className='user-like'>XXX님의 좋아요 목록</article>
          </div>
          <ItemMypageBottom />
        </section>
        
        {/* <div> 
          <article className="itemList">
           {items.map((item) => <Items key={item.id} item={item} />)}
          </article>
        </div>
          {/* </article> */}
         
        
      </div>
  
  );
}

export default ItemMypage;