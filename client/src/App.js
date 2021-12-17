import React, { useEffect, useState } from 'react';
import { Switch, Route, useHistory, Redirect } from 'react-router-dom';
import Event from './pages/Event';
import Login from './pages/Login';
import Mypage from './pages/Mypage';
import Signin from './pages/Signup';
import Ranking from './pages/Ranking';
import axios from 'axios';
import './App.css';

export default function App () {
  const [isLogin, setIsLogin] = useState(false);
  const [userinfo, setUserinfo] = useState(null);
  const history = useHistory();
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
  const handleResponseSuccess = () => {
    isAuthenticated();
  };
  // const handleLogout = () => {
  //   axios.post('https://localhost:3000/signout').then((res) => {
  //     setUserinfo(null);
  //     setIsLogin(false);
  //     history.push('/');
  //   });
  // };

  useEffect(() => {
    isAuthenticated();
  }, []);

  return (
    <div>
      <Switch>
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
        <Route path='/'>
          {isLogin ? <Redirect to='/ranking' /> : <Redirect to='/login' />}
        </Route>
        <Route path='/'>
          {isLogin ? <Redirect to='/mypage' /> : <Redirect to='/login' />}
        </Route>
      </Switch>
    </div>
  );
}