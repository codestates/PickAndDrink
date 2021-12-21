import React, { useState } from 'react';
import '../pages/Login.css'
import axios from 'axios';
import {Link} from 'react-router-dom'

axios.defaults.withCredentials = true;

//프랍스 이름 다시 정하기
export default function Login () {
  // const [loginInfo, setLoginInfo] = useState({
  //   email: '',
  //   password: ''
  // });
  // const [errorMessage, setErrorMessage] = useState('');
  // const handleInputValue = (key) => (e) => {
  //   setLoginInfo({ ...loginInfo, [key]: e.target.value });
  // };
  // const handleLogin = () => {
  //   const { email, password } = loginInfo
  //   if(!email || !password){
  //     setErrorMessage('이메일과 비밀번호를 입력하세요')
  //     return;
  //   }
  //   axios 
  //     .post('https://localhost:3000/signup', { email,password 
  //     })
  //     .then((res)=> {
  //       handleResponseSuccess(res)
  //     })
    // TODO : 서버에 로그인을 요청하고, props로 전달된 callback을 호출합니다.
    // TODO : 이메일 및 비밀번호를 입력하지 않았을 경우 에러를 표시해야 합니다.
  // };
  return (
    <div id='loginPageContainer'>
        <div id='loginImg'>
          <Link to ='/'><img src='/images/logo.png' alt=''></img></Link>
        </div>
      <h1>로그인</h1>
      <p>아직 회원이 아니신가요? <Link to='/signin'>회원가입 하기</Link></p>
        <div id='inputContainer'>
          <div><input className='loginInput' type='email'placeholder='이메일'/></div>
          <div><input className='loginInput' type='password' placeholder='비밀번호'/></div>
        </div>
        <button id='loginButton'>Login</button>
        <div id='test'>
          <div>Oauth</div>
        </div>
    </div>
  );
}
    <div>
      <center>
        <h1>Sign In</h1>
          <div><span>이메일</span><input type='email'/></div>
          <div><span>비밀번호</span><input type='password'/></div>
          <button className='btn btn-login' type='submit'>로그인</button>
      </center>
    </div>