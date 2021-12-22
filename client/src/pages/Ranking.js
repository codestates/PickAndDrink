import React from "react"; 
import Header from '../components/Header'
import '../pages/Ranking.css'
import Itemranking from "../components/RankingPageComponent/Itemranking";
import Footer from '../components/Footer'

export default function Ranking() {

  return (
    <div>
      <Header />
      <div id='ranking-container'>
        <Itemranking />
      </div>
      <Footer />
    </div>
  )
}
