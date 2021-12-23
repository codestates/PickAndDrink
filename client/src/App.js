import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate, Navigate, BrowserRouter, Link } from 'react-router-dom';
import Event from './pages/Event';
import Login from './pages/Login';
import Mypage from './pages/Mypage';
import Signup from './pages/Signup';
import Ranking from './pages/Ranking';
import Main from './pages/Main'
import Search from './pages/Search'
import axios from 'axios';
import './App.css';



export default function App () {

  const [text, setText] = useState('')
  
  const [isLogin, setIsLogin] = useState(false); // 로그인 여부: true/fale로 구분
  const [userinfo, setUserinfo] = useState(null); // 개인정보 저장
  const [accessToken, setAccessToken] = useState(null) // 액세스토큰: null/accToken
  const history = useNavigate(); // Signup, login 페이지 연결 부탁드립니다.
  
  const url = new URL(window.location.href)
  const [authorizationCode, setAuthorizationCode] =useState(url.searchParams.get('code'))

  useEffect(() => {
    if(isLogin) {
      axios({
        method: 'GET',
        url: `https://localhost:8443/auth/me`,
        headers: {
          accept: 'application/json',
          Authorization: accessToken
        }
      })
      .then((res) => {
        setUserinfo(res.data.userData)
      })
    }
  },[isLogin])

  useEffect(()=> {
    if (authorizationCode) {
      getGoogleAccessToken(authorizationCode)
    }
  },[authorizationCode])

  const handleLogin = (value) => {
    setIsLogin(value)
  }

  const handleAccessToken = (accToken) => { // 액세스토큰 저장
    setAccessToken(accToken)
  }

  const getGoogleAccessToken = (authorizationCode) => {
    //! 서버의 해당 엔드포인트로 authorization code를 보내주고 access token을 받아옴
    axios
    .post('https://localhost:8443/auth/googleCallback', {
      // 전달할 데이터 부분
      authorizationCode
    })
    .then((result) => {
      // console.dir(result)
      setAccessToken(result.data.accessToken)
      setIsLogin(true);
    })
  }

  return (
    <div>

      <Routes>
        <Route path='/login'element={<Login setToken={handleAccessToken} handleLogin={handleLogin}/>} />
        <Route path='/'element={<Main isLogin={isLogin} userinfo={userinfo} setIsLogin={setIsLogin}/>} />
        <Route path='/mypage'element={<Mypage isLogin={isLogin} userinfo={userinfo} accessToken={accessToken} setIsLogin={setIsLogin} />} />
        <Route path='/event'element={<Event isLogin={isLogin} userinfo={userinfo} setIsLogin={setIsLogin}/>} />
        <Route path='/ranking'element={<Ranking isLogin={isLogin} userinfo={userinfo} setIsLogin={setIsLogin} setToken={accessToken}/>} />
        <Route path='/signup'element={<Signup isLogin={isLogin} setToken={handleAccessToken} handleLogin={handleLogin} userinfo={userinfo}/>} />
        <Route path='/search'element={<Search isLogin={isLogin} setToken={accessToken} userinfo={userinfo}/>} /> 
      </Routes>

    </div>
  );
}

// react-router-dom v6에서는 ...
// Switch가 Routes로 대체됨
// UseHistory가 useNavigate로 대체됨
// Redirect가 Navigate로 대체됨