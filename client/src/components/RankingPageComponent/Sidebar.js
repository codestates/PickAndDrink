import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'

function Sidebar ({accessToken, setComments, setCurPage}) {

  function getComment(e) {
    axios.get('https://localhost:8443/comment', {
      headers: {
        accept: 'application/json',
        authorization :accessToken
      }
    })
    .then((res) => {
      setComments(res.data.data)
    })
    setCurPage(e.target.textContent)
  }

  return (
    <div id='mypage-sidebar-body'>
      <section id="sidebar-container">
        <div className='sidebar-category' onClick={(e) => getComment(e)}>comment</div>
        <div className='sidebar-category' onClick={(e) => getComment(e)}>즐겨찾기</div>
        <div className='sidebar-category' onClick={(e) => getComment(e)}>회원탈퇴</div>
      </section>
  </div>
  );
}

export default Sidebar;
