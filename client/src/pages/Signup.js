import React from "react"; 
import Header from '../components/Header'
import Footer from '../components/Footer'
import './Signup.css'

export default function Signup() {

  return (
    <>
      <Header />
      <div id='signupContainer'>
        <div>
          <input className='signupInput' placeholder='E-mail을 입력해주세요' />
          {/* <button className='checkButton'>중복확인</button> */}
        </div>

        <div>
          <input className='signupInput' placeholder='비밀번호를 입력해주세요' />
        </div>

        <div>
          <input className='signupInput' placeholder='비밀번호 확인' />
        </div>

        <div>
          <input className='signupInput' placeholder='이름을 입력해주세요' />
        </div>

        <div>
          <input className='signupInput' placeholder='닉네임을 입력해주세요' />
        </div>

        <button id='signupButton'>회원가입!</button>
      </div>
      <Footer />
    </>
  )
}

