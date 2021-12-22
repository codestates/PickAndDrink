import React from "react"; 
import Header from '../components/Header'
import '../pages/Ranking.css'
import Itemranking from "../components/RankingPageComponent/Itemranking";
import Footer from '../components/Footer'

export default function Ranking({isLogin, userinfo, setIsLogin}) {

  return (
    <div>
      <Header isLogin={isLogin} userinfo={userinfo} setIsLogin={setIsLogin}/>
      <Footer />
    </div>
  )
}
