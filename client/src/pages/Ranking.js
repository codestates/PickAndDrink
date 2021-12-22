import React from "react"; 
import Header from '../components/Header'
import '../pages/Ranking.css'
import Itemranking from "../components/Itemranking";

export default function Ranking() {

  return (
    <div>
      <Header />
      <div id='ranking-container'>
        <Itemranking />
      </div>
    </div>
  )
}
