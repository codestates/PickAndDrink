import {useState} from 'react'
import { Link, useNavigate } from "react-router-dom";
import "../components/Header.css";

function Header({isLogin, userinfo}) {
  const [word, setWord] = useState()
  const navigate = useNavigate()

  const gotoSearch = () => {
    if (!word || word === ' ') return null 
    navigate(`/search?item-name=${word}`)
  }

  return (
    <div id='headerContainer'>
      <header id="header">
          <div id='logo'>
          <Link to="/">
            <img src="/images/logo.png" alt="logo" />
          </Link>
          </div>
        <div id="searchContainer">
          <input id="search" placeholder="검색" type="text" onChange={(e) => setWord(e.target.value)}></input>
          <input
            id="searchImg"
            placeholder="검색"
            type="image"
            src="https://file.rankingdak.com/_skin/new_rankingdak_ver4/img/common/search_icon2.png"
            onClick={gotoSearch}
          ></input>
        </div>
        {
          userinfo ? <div id="hello">{userinfo.nickname}님 안녕하세요!</div>
          : <Link to="/signup"><div id="signup">signup</div></Link>
        }
      </header>

      <nav id="menu">
        {/* <Link to="/story"><div>Story</div></Link> */}
        <Link to="/ranking"><div>음료랭킹</div></Link>
        <Link to="/event"><div>편의점 음료 특가</div></Link>
        {
          isLogin ? <Link to="/mypage"><div>Mypage</div></Link>
          : <Link to="/login"><div>Login</div></Link>
        }
      </nav>
    </div>
  );
}

export default Header;
