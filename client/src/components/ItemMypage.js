import React from 'react';
import { Link } from 'react-router-dom';
import './ItemMypage.css'

function ItemMypage () {

  return (
    <div id='item-mypage-body'>
        <section id="mypage-Container">
          <article className="profile">
            <div className="profile-Img">
              <img src="images/pickCat.jpg" alt="" />
            </div>
            <div className="welcome">
              <h1>XXX님 반갑습니다.</h1>
            </div>
          </article>

          {/* <article className="like-items">
            <div className="like-item-img">
              <img src="images/pickCat.jpg" alt="" />
            </div>
            <div className="like-item">광동 옥수수 수염차</div>
            <span className='like-button'></span>
            <h4>2021.12.30</h4>
          </article>

          <article className="like-items">
            <div className="like-item-img">
              <img src="images/pickCat.jpg" alt="" />
            </div>
            <div className="like-item">광동 옥수수 수염차</div>
            <span className='like-button'></span>
            <h4>2021.12.30</h4>
          </article>


          <article className="like-items">
            <div className="like-item-img">
              <img src="images/pickCat.jpg" alt="" />
            </div>
            <div className="like-item">광동 옥수수 수염차</div>
            <span className='like-button'></span>
            <h4>2021.12.30</h4>
          </article>


          <article className="like-items">
            <div className="like-item-img">
              <img src="images/pickCat.jpg" alt="" />
            </div>
            <div className="like-item">광동 옥수수 수염차</div>
            <span className='like-button'></span>
            <h4>2021.12.30</h4>
          </article> */}
        </section>
    </div>
  );
}

export default ItemMypage;