import { Link } from "react-router-dom";
import "../components/Header.css";

function Header() {
  return (
    <div id='headerContainer'>
      <header id="header">
        
          <div id='logo'>
          <Link to="/">
            <img src="/images/logo.png" alt="logo" />
          </Link>
          </div>

        <div id="searchContainer">
          <input id="search" placeholder="검색" type="text"></input>
          <input
            id="searchImg"
            placeholder="검색"
            type="image"
            src="https://file.rankingdak.com/_skin/new_rankingdak_ver4/img/common/search_icon2.png"
          ></input>
        </div>

        <Link to="signup">
          <div id="signup">signup</div>
        </Link>
      </header>

      <nav id="menu">
        <Link to="/story"><div>Story</div></Link>
        <Link to="/ranking"><div>음료랭킹</div></Link>
        <Link to="/event"><div>편의점 음료 특가</div></Link>
        <Link to="/mypage"><div>mypage</div></Link>
        <Link to="/login"><div>Login</div></Link>
      </nav>
    </div>
  );
}

export default Header;
