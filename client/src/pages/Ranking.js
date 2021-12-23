import React from "react"; 
import Header from '../components/Header'
import '../pages/Ranking.css'
import Itemranking from "../components/RankingPageComponent/Itemranking";
import Footer from '../components/Footer'
import Modal from "../components/Modal";

export default function Ranking({setToken, isLogin, userinfo, setIsLogin}) {

  return (
    <div>
      
      <Header isLogin={isLogin} userinfo={userinfo} setIsLogin={setIsLogin}/>
      <div id='ranking-container'>
        <Itemranking isLogin={isLogin} setToken={setToken}/>
      </div>
      <Footer />
    </div>
  )
}
