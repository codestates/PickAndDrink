import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ItemMypage from '../components/MyPageComponent/ItemMypage'
import Header from '../components/Header'
import Sidebar from '../components/RankingPageComponent/Sidebar'
import './Mypage.css' 
import ItemPageBottom from '../components/MyPageComponent/ItemMypageBottom'
import Comment from '../components/MyPageComponent/Comment'
import Delete from  '../components/MyPageComponent/Delete'

axios.defaults.withCredentials = true;

function Mypage ({isLogin, userinfo, accessToken, setIsLogin}) {
  const [curPage, setCurPage] = useState('즐겨찾기')
  const [comments, setComments] = useState([])

  function pageRender() {
    if(curPage === '즐겨찾기') {
      return <ItemMypage userinfo={userinfo} setToken={accessToken}/>
    }
    else if(curPage === 'comment') {
      return <Comment accessToken={accessToken} comments={comments} userinfo={userinfo}/>
    }
    else if(curPage === '회원탈퇴') {
      return <Delete userinfo={userinfo} accessToken={accessToken} setIsLogin={setIsLogin}/>
    }
  }
  


  return (
    <div>
      <Header isLogin={isLogin} userinfo={userinfo} setIsLogin={setIsLogin}/>
      <div id='itemMypage-container'>
      <Sidebar accessToken={accessToken} setComments={setComments} setCurPage={setCurPage}/>
      {
        pageRender(curPage)
      }
      </div>
    </div>
  );
}

export default Mypage;