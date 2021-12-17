import React, { useState } from 'react';
import axios from 'axios';

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
    <div>
      <center>
        <h1>Sign In</h1>
          <div>
            <span>이메일</span>
            <input type='email'/>
          </div>
          <div>
            <span>비밀번호</span>
            <input
              type='password'
            />
          </div>
          <div>
            {/* <Link to='/signup'>회원가입을 하시겠어요?</Link> */}
          </div>
          <button className='btn btn-login' type='submit'>
            로그인
          </button>
          <div className='alert-box'></div>
      </center>
    </div>
  );
}
