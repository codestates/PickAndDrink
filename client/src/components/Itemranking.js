import React from 'react';
import { Link } from 'react-router-dom';
import './Itemranking.css'

function Itemranking () {

  return (
    <div id='itemranking-body'>
      <span id='title'>
        <img id='logo' src='./logo.jpg' alt='logo' />
        <span id='name'>PickAndDrink</span>
      </span>
      <div id='menu'>
        <Link to='/'>signin</Link>
        <Link to='/ranking'>음료랭킹</Link>
        <Link to='/event'>편의점 음료 특가</Link>
        <Link to='/mypage'>my page</Link>
      </div>
    </div>
  );
}

export default Itemranking;