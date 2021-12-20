import { Link } from "react-router-dom";
import "../components/Header.css";

function Header() {
  return (
    <div>
      <header id="header">
        <Link to="/">
          <img id="logo" src="/images/logo.png" alt="logo" />
        </Link>
        <div id="searchContainer">
          <input id="search" placeholder="검색" type="text"></input>
          <input
            id="searchImg"
            placeholder="검색"
            type="image"
            src="/images/search.jpg"
          ></input>
        </div>
        <Link to="signin">
          <div id="signin">signin</div>
        </Link>
      </header>

      <nav id="menu">
        <Link to="/story">Story</Link>
        <Link to="/ranking">
          <div>음료랭킹</div>
        </Link>
        <Link to="/event">
          <div>편의점 음료 특가</div>
        </Link>
        <Link to="/mypage">
          <div>mypage</div>
        </Link>
        <Link to="/login">
          <div>Login</div>
        </Link>
      </nav>
    </div>
  );
}

export default Header;
