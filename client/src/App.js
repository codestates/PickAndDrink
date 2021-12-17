import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate, Navigate, BrowserRouter, Link } from 'react-router-dom';
import Event from './pages/event';
import Login from './pages/login';
import Mypage from './pages/mypage';
import Signup from './pages/signup';
import Ranking from './pages/ranking';
import Signin from './pages/signin';
import axios from 'axios';
import './App.css';

import Header from './components/Header';

export default function App () {
  
  const [isLogin, setIsLogin] = useState(false);
  const [userinfo, setUserinfo] = useState(null);
  const history = useNavigate();
  const isAuthenticated = () => {
    axios
      .get("https://localhost:3000") 
      .then((res) => {
        setIsLogin(true); 
        setUserinfo(res.data.data.userInfo); 
        history.push("/");
      })
      .catch((err) => {
        console.log("토큰이 만료 되었습니다. 다시 로그인 해 주세요.")
      });
    // TODO: 이제 인증은 성공했습니다. 사용자 정보를 호출하고, 이에 성공하면 로그인 상태를 바꿉시다.
  };
  const handleResponseSuccess = () => {
    isAuthenticated();
  };
  const handleLogout = () => {
    axios.post('https://localhost:3000/signout').then((res) => {
      setUserinfo(null);
      setIsLogin(false);
      history.push('/');
    });
  };

  useEffect(() => {
    isAuthenticated();
  }, []);

  return ( // index페이지를 pages폴더에 넣어야하나?
    <div>

      <BrowserRouter>
      <Routes>
        <Route path='/login'>
          <Login
            isLogin={isLogin}
            handleResponseSuccess={handleResponseSuccess}
          />
        </Route>

        <Route exact path='/signin'>
          <Signup isLogin={isLogin} />
        </Route>

        <Route exact path='/mypage'>
          <Mypage userinfo={userinfo} handleLogout={handleLogout} />
        </Route>

        <Route exact path='/'>
          <span>asdf</span>
        </Route>

        { /* <Route path='/'> 
          {isLogin ? <Navigate to='/ranking' /> : <Navigate to='/login' />}
        </Route>

        <Route path='/'>
          {isLogin ? <Navigate to='/mypage' /> : <Navigate to='/login' />}
        </Route> */}

        {/* root는 index페이지여야하지않을까? */}

      </Routes>
      </ BrowserRouter>
      
    </div>
  );
}

// react-router-dom v6에서는 ...
// Switch가 Routes로 대체됨
// UseHistory가 useNavigate로 대체됨
// Redirect가 Navigate로 대체됨

// import 경로들 첫 글자 대소문자 구분

// 68 ~ 74줄 무슨 코드인지

// 해야할 것
// page와 component의 분리
// page: 와이어 프레임에서 그린 page들
// component: footer, header