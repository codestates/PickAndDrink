import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate, Navigate, BrowserRouter, Link } from 'react-router-dom';
import Event from './pages/Event';
import Login from './pages/Login';
import Mypage from './pages/Mypage';
import Signup from './pages/Signup';
import Ranking from './pages/Ranking';
import Signin from './pages/Signin';
import Main from './pages/Main'
import axios from 'axios';
import './App.css';



export default function App () {
  
  // const [isLogin, setIsLogin] = useState(false);
  // const [userinfo, setUserinfo] = useState(null);
  // const history = useNavigate();
  // const isAuthenticated = () => {
  //   axios
  //     .get("https://localhost:3000") 
  //     .then((res) => {
  //       setIsLogin(true); 
  //       setUserinfo(res.data.data.userInfo); 
  //       history.push("/");
  //     })
  //     .catch((err) => {
  //       console.log("토큰이 만료 되었습니다. 다시 로그인 해 주세요.")
  //     });
  //   // TODO: 이제 인증은 성공했습니다. 사용자 정보를 호출하고, 이에 성공하면 로그인 상태를 바꿉시다.
  // };
  // const handleResponseSuccess = () => {
  //   isAuthenticated();
  // };
  // const handleLogout = () => {
  //   axios.post('https://localhost:3000/signout').then((res) => {
  //     setUserinfo(null);
  //     setIsLogin(false);
  //     history.push('/');
  //   });
  // };

  // useEffect(() => {
  //   isAuthenticated();
  // }, []);

  return ( // index페이지를 pages폴더에 넣어야하나?
    <div>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/event" element={<Event />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

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
// page와 component분리작업
// page: 와이어 프레임에서 그린 page들
// component: footer, header
